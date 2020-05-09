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
const _ = require("underscore.string");
const SwaggerParser = require("swagger-parser");
const string_1 = require("../../../util/string");
function openApiParser(generator, apiPath) {
    return __awaiter(this, void 0, void 0, function* () {
        let parser = new SwaggerParser();
        let api = yield parser.parse(apiPath);
        let sdkEndpoints = [];
        let schemas = [];
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
                    // convert to sdk definition format
                    .map((operationKey) => convertOperationToSdkDefinitionFormat(parser, api, schemas, operationKey, endpointOperations)));
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
        return new SdkApiDefinition_1.SdkApiDefinition(sdkEndpoints, schemas);
    });
}
exports.openApiParser = openApiParser;
function convertOperationToSdkDefinitionFormat(parser, api, schemas, operationKey, endpointOperations) {
    let sdkParameters = [];
    if (endpointOperations[operationKey].parameters) {
        endpointOperations[operationKey].parameters.forEach((param) => {
            let currentSdkParameter;
            if (param.$ref) {
                let refParam = parser.$refs.get(param.$ref);
                schemas.push(refParam);
                currentSdkParameter = Object.assign(Object.assign({}, refParam), { title: string_1.StringUtil.lowerFirstChar(_.classify(refParam.name)), location: refParam.in });
            }
            else {
                schemas.push(param);
                currentSdkParameter = Object.assign(Object.assign({}, param), { title: string_1.StringUtil.lowerFirstChar(_.classify(param.name)), location: param.in });
            }
            sdkParameters.push(currentSdkParameter);
        });
    }
    let sdkResponse;
    let sdkErrors = [];
    if (endpointOperations[operationKey].responses) {
        Object.keys(endpointOperations[operationKey].responses).forEach((responseKey) => {
            let statusCode = parseInt(responseKey);
            let response = endpointOperations[operationKey].responses[responseKey];
            if (response.content) {
                let textJavascript = response.content['text/javascript'];
                let contentType = textJavascript ? 'text/javascript' : 'application/json';
                if (response.content[contentType]) {
                    let responseContent = response.content[contentType];
                    let currentSdkResponse;
                    let currentSdkResponseSchema;
                    if (responseContent.$ref) {
                        let refResponse = parser.$refs.get(responseContent.$ref);
                        currentSdkResponseSchema = Object.assign({}, refResponse);
                    }
                    else {
                        currentSdkResponseSchema = Object.assign({}, responseContent);
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
        title: _.classify(endpointOperations[operationKey].summary) + _.classify(operationKey),
        description: endpointOperations[operationKey].description,
        parameters: sdkParameters,
        response: sdkResponse,
        errors: sdkErrors,
    };
}
