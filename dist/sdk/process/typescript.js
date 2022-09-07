"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("../convert/typescript/api");
const endpoint_1 = require("../convert/typescript/endpoint");
const schema_1 = require("../convert/typescript/schema");
function process(generator, apis, renderTemplate) {
    // generator.log(generator.selectedLanguage + ' selected typescript');
    // generator.log(generator.outputDir);
    // generator.log(generator.templateDir);
    let sdkApi = api_1.apiConvert(apis);
    renderTemplate.mustache('api', sdkApi, 'Api', 'ts');
    sdkApi.endpoints.forEach((sdkEndpoint) => {
        renderTemplate.mustache('endpoint', endpoint_1.endpointConvert(sdkEndpoint), sdkEndpoint.title, 'ts', 'endpoint');
    });
    try {
        sdkApi.schemas.forEach((schema) => {
            if (schema.title) {
                renderTemplate.mustache('schema', schema_1.schemaConvert(schema), schema.title || 'unknownschema', 'ts', 'schema');
            }
        });
    }
    catch (e) {
        console.log('schemas fail');
    }
}
exports.process = process;
