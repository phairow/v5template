"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("../convert/typescript/api");
const endpoint_1 = require("../convert/typescript/endpoint");
function process(generator, apis, renderTemplate) {
    // generator.log(generator.selectedLanguage + ' selected typescript');
    // generator.log(generator.outputDir);
    // generator.log(generator.templateDir);
    let sdkApi = api_1.apiConvert(apis);
    renderTemplate.mustache('api', sdkApi, 'api', 'ts');
    sdkApi.endpoints.forEach((sdkEndpoint) => {
        renderTemplate.mustache('endpoint', endpoint_1.endpointConvert(sdkEndpoint), sdkEndpoint.title, 'ts', 'endpoints');
    });
    try {
        sdkApi.parameters.forEach((parameter) => {
            renderTemplate.mustache('parameter', parameter, parameter.name, 'ts', 'parameter');
        });
    }
    catch (e) {
        console.log('parameters fail');
    }
    try {
        sdkApi.schemas.forEach((schema) => {
            if (schema.title) {
                renderTemplate.ejs('schema', schema, schema.title || 'unknownschema', 'ts', 'schema');
            }
        });
    }
    catch (e) {
        console.log('schemas fail');
    }
}
exports.process = process;
