import { OpenAPI, OpenAPIV3 } from 'openapi-types';
import { SdkApiDefinition } from "../../format/SdkApiDefinition";
import { SdkEndpoint } from "../../format/SdkEndpoint";
import { SdkParameter } from "../../format/SdkParameter";
import SdkGenerator from '../../../sdk/index';
import * as _ from 'underscore.string';
import SwaggerParser = require('swagger-parser');
import { SdkResponse } from '../../format/SdkResponse';
import { StringUtil } from '../../../util/string';

export async function openApiParser(generator: SdkGenerator, apiPath: string): Promise<SdkApiDefinition> {
  try {
    let parser = new SwaggerParser();
    let api = await parser.bundle(apiPath);
    let sdkEndpoints: SdkEndpoint[] = [];
    let schemas: OpenAPIV3.SchemaObject[] = [];
    let parameters: OpenAPIV3.ParameterObject[] = [];

    try {
      sdkEndpoints = sdkEndpoints.concat(
        // iterate the path components
        Object.keys(api.paths)
        // extract each path object from open api document
        .map((pathKey: string) => api.paths[pathKey])
        // convert and combine the endpoints for each path
        .reduce(
          (
            allEndpoints: SdkEndpoint[],
            endpointOperations: OpenAPIV3.PathItemObject
          ) => {

            return allEndpoints.concat(
              // iterate the endpoint operations for each path
              Object.keys(endpointOperations)
              // filter out parameters, not sure why it exists here, parser error?
              .filter((operationKey: string) => operationKey !== 'parameters')
              // convert to sdk definition format
              .map((operationKey: string) => 
                convertOperationToSdkDefinitionFormat(
                  parser,
                  api,
                  schemas,
                  parameters,
                  operationKey,
                  endpointOperations,
                )
              )
            );
          },
          [] // initial list of all endpoints for the reduce operation
        )
        // exclude any endpoints that do not have a title
        // TODO: this filter step should not be needed in the end
        .filter((item: SdkEndpoint) => item.title && item.title.length > 0 )
      );
    } catch(e) {
      console.log('error getting operations', e);
      console.log(e);
      throw e;
    }

    return {
      endpoints: sdkEndpoints,
      parameters,
      schemas,
    };
  } catch (e) {
    console.log('error parsing', apiPath);
    console.log(e);

    throw e;
  }
}

function convertOperationToSdkDefinitionFormat(
  parser: SwaggerParser,
  api: OpenAPI.Document,
  schemas: OpenAPIV3.SchemaObject[],
  parameters: OpenAPIV3.ParameterObject[],
  operationKey: string,
  endpointOperations: OpenAPIV3.PathItemObject
): SdkEndpoint {

  let sdkParameters: SdkParameter[] = [];
  let operation: OpenAPIV3.OperationObject  = (endpointOperations as any)[operationKey];

  function getSchema(schemaIn: OpenAPIV3.ReferenceObject |  OpenAPIV3.SchemaObject | undefined, defaultTitle: string) {
    let schemaOut: OpenAPIV3.SchemaObject;

    if (schemaIn) {
      if ('$ref' in schemaIn) {
        schemaOut = parser.$refs.get(schemaIn.$ref);

        if (schemaOut) {
          schemaOut.title = schemaOut.title || defaultTitle + 'RefSchema';
        }
      } else {
        schemaOut = schemaIn;
        schemaOut.title = schemaOut.title || defaultTitle + 'Schema';
      }
    } else {
      schemaOut = { type: 'null', title: 'unknown' };
    }

    if (schemaOut.type === 'array') {
      if ('$ref' in schemaOut.items) {
        schemaOut.items = getSchema(schemaOut.items, 'items');
      }
    }

    return schemaOut;
  }

  if (operation.parameters) {
    operation.parameters.forEach((param: OpenAPIV3.ReferenceObject | OpenAPIV3.ParameterObject) => {
      let currentSdkParameter: SdkParameter;

      if ('$ref' in param) {
        let refParam: OpenAPIV3.ParameterObject = parser.$refs.get(param.$ref);
        
        parameters.push(refParam);

        let schema = getSchema(refParam.schema,  getName(param.$ref));

        schemas.push(schema || { type: 'null', title: 'unknown' });

        currentSdkParameter = new SdkParameter(
          StringUtil.lowerFirstChar(_.classify(refParam.name)),
          refParam.name || 'noname',
          refParam.in,
          refParam.description || refParam.name || 'nodesc',
          refParam.required || false,
          schema,
        );
      } else {
        
        parameters.push(param);

        let schema = getSchema(param.schema, param.name);
        
        schemas.push(schema || { type: 'null', title: 'unknown' });

        currentSdkParameter = new SdkParameter(
          StringUtil.lowerFirstChar(_.classify(param.name)),
          param.name || 'noname',
          param.in,
          param.description || param.name || 'nodesc',
          param.required || false,
          schema
        );
      }

      sdkParameters.push(currentSdkParameter);
    });
  }

  let sdkResponse!: SdkResponse;
  let sdkErrors: SdkResponse[] = [];
  let responses = operation.responses;

  if (responses) {
    Object.keys(responses).forEach((responseKey: string) => {
      let statusCode = parseInt(responseKey);
      let response: OpenAPIV3.ReferenceObject | OpenAPIV3.ResponseObject | undefined = responses && responses[responseKey];

      if (response && 'content' in response && response.content) {
        let textJavascript = response.content['text/javascript'];
        let contentType = textJavascript ? 'text/javascript' : 'application/json';  

        if (response.content[contentType]) {
          let responseContent = response.content[contentType];
          let currentSdkResponse: SdkResponse;
          let currentSdkResponseSchema: OpenAPIV3.SchemaObject;

          if (responseContent.schema) {
            if ('$ref' in responseContent.schema) {
              let refResponse = getSchema(responseContent.schema, getName(responseContent.schema.$ref));
              currentSdkResponseSchema = { ...refResponse };
            } else {
              responseContent.schema.title = responseContent.schema.title || 'emptyresponsetitle';
              currentSdkResponseSchema = { ...responseContent.schema };
            }

            schemas.push(currentSdkResponseSchema || { type: 'null', title: 'unknown' });  
          } else {
            currentSdkResponseSchema = { type: 'null', title: 'unknown' };
          }

          currentSdkResponse = {
            status: statusCode,
            description: response.description,
            contentType: contentType,
            schema: currentSdkResponseSchema
          };

          if (statusCode === 200) {
            sdkResponse = currentSdkResponse;
          } else {
            sdkErrors.push(currentSdkResponse);
          }
        }
      }
    });
  }
  
  return new SdkEndpoint(
    operationKey,
    api.info.title || '',
    api.info.description || '',
    api.info.version,
    _.classify(operation.summary || '') + _.classify(operationKey) ,
    operation.description || '',
    sdkParameters,
    sdkResponse,
    sdkErrors,
  );
}

function getName(path: string): string {
  let parts = path.split('/');
  return parts[parts.length - 1];
}

// function resolveSchemas(path: string, schemas: OpenAPIV3.SchemaObject[]): OpenAPIV3.SchemaObject {

// }