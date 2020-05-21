"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("../convert/javascript/api");
const endpoint_1 = require("../convert/javascript/endpoint");
function process(generator, apis, renderTemplate) {
    // generator.log(generator.selectedLanguage + ' selected java');
    // generator.log(generator.outputDir);
    // generator.log(generator.templateDir);
    let sdkApi = api_1.apiConvert(apis);
    renderTemplate.ejs('api', sdkApi, 'Api', 'java');
    sdkApi.endpoints.forEach((sdkEndpoint) => {
        renderTemplate.ejs('endpoint', endpoint_1.endpointConvert(sdkEndpoint), sdkEndpoint.title, 'java', 'endpoint');
    });
}
exports.process = process;
