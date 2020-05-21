"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const SdkApiDefinition_1 = require("../../format/SdkApiDefinition");
const SdkParameter_1 = require("../../format/SdkParameter");
const _ = require("underscore.string");
const SwaggerParser = require("swagger-parser");
const string_1 = require("../../../util/string");
function openApiParser(generator, apiPath) {
    return __awaiter(this, void 0, void 0, function* () {
        let parser = new SwaggerParser();
        let api = yield parser.parse(apiPath);
        let sdkEndpoints = [];
        let schemas = [];
        let parameters = [];
        try {
            sdkEndpoints = sdkEndpoints.concat(
            // iterate the path components
            Object.keys(api.paths)
                // extract each path object from open api document
                .map((pathKey) => api.paths[pathKey])
                // convert and combine the endpoints for each path
                .reduce((allEndpoints, endpointOperations) => {
                return allEndpoints.concat(
                // iterate the endpoint operations for each path
                Object.keys(endpointOperations)
                    // filter out parameters, not sure why it exists here, parser error?
                    .filter((operationKey) => operationKey !== 'parameters')
                    // convert to sdk definition format
                    .map((operationKey) => convertOperationToSdkDefinitionFormat(parser, api, schemas, parameters, operationKey, endpointOperations)));
            }, [] // initial list of all endpoints for the reduce operation
            )
                // exclude any endpoints that do not have a title
                // TODO: this filter step should not be needed in the end
                .filter((item) => item.title && item.title.length > 0));
        }
        catch (e) {
            console.log('error getting operations', e);
            throw e;
        }
        return new SdkApiDefinition_1.SdkApiDefinition(sdkEndpoints, parameters, schemas);
    });
}
exports.openApiParser = openApiParser;
function convertOperationToSdkDefinitionFormat(parser, api, schemas, parameters, operationKey, endpointOperations) {
    let sdkParameters = [];
    let operation = endpointOperations[operationKey];
    function getSchema(schemaIn, defaultTitle) {
        let schemaOut;
        if (schemaIn) {
            if ('$ref' in schemaIn) {
                schemaOut = parser.$refs.get(schemaIn.$ref);
                if (schemaOut) {
                    schemaOut.title = schemaOut.title || defaultTitle + 'RefSchema';
                }
            }
            else {
                schemaOut = schemaIn;
                schemaOut.title = schemaOut.title || defaultTitle + 'Schema';
            }
        }
        else {
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
        operation.parameters.forEach((param) => {
            let currentSdkParameter;
            if ('$ref' in param) {
                let refParam = parser.$refs.get(param.$ref);
                parameters.push(refParam);
                let schema = getSchema(refParam.schema, getName(param.$ref));
                schemas.push(schema || { type: 'null', title: 'unknown' });
                currentSdkParameter = new SdkParameter_1.SdkParameter(string_1.StringUtil.lowerFirstChar(_.classify(refParam.name)), refParam.name || 'noname', refParam.in, refParam.description || refParam.name || 'nodesc', refParam.required || false, schema);
            }
            else {
                parameters.push(param);
                let schema = getSchema(param.schema, param.name);
                schemas.push(schema || { type: 'null', title: 'unknown' });
                currentSdkParameter = new SdkParameter_1.SdkParameter(string_1.StringUtil.lowerFirstChar(_.classify(param.name)), param.name || 'noname', param.in, param.description || param.name || 'nodesc', param.required || false, schema);
            }
            sdkParameters.push(currentSdkParameter);
        });
    }
    let sdkResponse;
    let sdkErrors = [];
    let responses = operation.responses;
    if (responses) {
        Object.keys(responses).forEach((responseKey) => {
            let statusCode = parseInt(responseKey);
            let response = responses && responses[responseKey];
            if (response && 'content' in response && response.content) {
                let textJavascript = response.content['text/javascript'];
                let contentType = textJavascript ? 'text/javascript' : 'application/json';
                if (response.content[contentType]) {
                    let responseContent = response.content[contentType];
                    let currentSdkResponse;
                    let currentSdkResponseSchema;
                    if (responseContent.schema) {
                        if ('$ref' in responseContent.schema) {
                            let refResponse = getSchema(responseContent.schema, getName(responseContent.schema.$ref));
                            currentSdkResponseSchema = Object.assign({}, refResponse);
                        }
                        else {
                            responseContent.schema.title = responseContent.schema.title || 'emptyresponsetitle';
                            currentSdkResponseSchema = Object.assign({}, responseContent.schema);
                        }
                        schemas.push(currentSdkResponseSchema || { type: 'null', title: 'unknown' });
                    }
                    else {
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
                    }
                    else {
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
        title: _.classify(operation.summary || '') + _.classify(operationKey),
        description: operation.description || '',
        parameters: sdkParameters,
        response: sdkResponse,
        errors: sdkErrors,
    };
}
function getName(path) {
    let parts = path.split('/');
    return parts[parts.length - 1];
}
// function resolveSchemas(path: string, schemas: OpenAPIV3.SchemaObject[]): OpenAPIV3.SchemaObject {
// }
