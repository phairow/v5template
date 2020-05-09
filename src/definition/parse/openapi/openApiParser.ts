import { OpenAPI, OpenAPIV2, OpenAPIV3 } from 'openapi-types';
import { SdkApiDefinition } from "../../format/SdkApiDefinition";
import { SdkEndpoint } from "../../format/SdkEndpoint";
import { SdkParameter } from "../../format/SdkParameter";
import SdkGenerator from '../../../sdk/index';
import * as _ from 'underscore.string';
import SwaggerParser = require('swagger-parser');
import { SdkResponse } from '../../format/SdkResponse';
import { StringUtil } from '../../../util/string';

export async function openApiParser(generator: SdkGenerator, apiPath: string): Promise<SdkApiDefinition> {
  let parser = new SwaggerParser();
  let api = await parser.parse(apiPath);
  let sdkEndpoints: SdkEndpoint[] = [];
  let schemas: object[] = [];

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
          endpointOperations: OpenAPIV2.PathsObject | OpenAPIV3.PathsObject
        ) => {

          return allEndpoints.concat(
            // iterate the endpoint operations for each path
            Object.keys(endpointOperations)
            // convert to sdk definition format
            .map((operationKey: string) => 
              convertOperationToSdkDefinitionFormat(
                parser,
                api,
                schemas,
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
    console.log('error getting operations', e)
    throw e;
  }

  return new SdkApiDefinition(
    sdkEndpoints,
    schemas,
  );
}

function convertOperationToSdkDefinitionFormat(
  parser: SwaggerParser,
  api: OpenAPI.Document,
  schemas: object[],
  operationKey: string,
  endpointOperations: OpenAPIV2.PathsObject | OpenAPIV3.PathsObject
): SdkEndpoint {

  let sdkParameters: SdkParameter[] = [];

  if (endpointOperations[operationKey].parameters) {
    endpointOperations[operationKey].parameters.forEach((param: any) => {
      let currentSdkParameter;

      if (param.$ref) {
        let refParam = parser.$refs.get(param.$ref);
        
        schemas.push(refParam);

        currentSdkParameter = {
          ...refParam,
          title: StringUtil.lowerFirstChar(_.classify(refParam.name)),
          location: refParam.in,
        };
      } else {
        
        schemas.push(param);

        currentSdkParameter = {
          ...param,
          title: StringUtil.lowerFirstChar(_.classify(param.name)),
          location: param.in
        };
      }

      sdkParameters.push(currentSdkParameter);
    });
  }

  let sdkResponse!: SdkResponse;
  let sdkErrors: SdkResponse[] = [];

  if (endpointOperations[operationKey].responses) {
    Object.keys(endpointOperations[operationKey].responses).forEach((responseKey: string) => {
      let statusCode = parseInt(responseKey);
      let response = endpointOperations[operationKey].responses[responseKey];

      if (response.content) {
        let textJavascript = response.content['text/javascript'];
        let contentType = textJavascript ? 'text/javascript' : 'application/json';  

        if (response.content[contentType]) {
          let responseContent = response.content[contentType];
          let currentSdkResponse: SdkResponse;
          let currentSdkResponseSchema: object;

          if (responseContent.$ref) {
            let refResponse = parser.$refs.get(responseContent.$ref);
            
            currentSdkResponseSchema = { ...refResponse };
          } else {
            currentSdkResponseSchema = { ...responseContent };
          }

          schemas.push(currentSdkResponseSchema);
          
          currentSdkResponse = {
            status: statusCode,
            description: response,
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
  
  return {
    httpMethod: operationKey,
    apiTitle: api.info.title || '',
    apiDescription: api.info.description || '',
    apiVersion: api.info.version,
    title: _.classify(endpointOperations[operationKey].summary) + _.classify(operationKey) ,
    description: endpointOperations[operationKey].description,
    parameters: sdkParameters,
    response: sdkResponse,
    errors: sdkErrors,
  };
}