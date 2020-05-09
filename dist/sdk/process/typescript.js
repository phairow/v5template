"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("../convert/typescript/api");
const endpoint_1 = require("../convert/typescript/endpoint");
function process(generator, apis, renderTemplate) {
    // generator.log(generator.selectedLanguage + ' selected typescript');
    // generator.log(generator.outputDir);
    // generator.log(generator.templateDir);
    let sdkApi = api_1.apiConvert(apis);
    renderTemplate('api', sdkApi, 'api', 'js');
    sdkApi.endpoints.forEach((sdkEndpoint) => {
        renderTemplate('endpoint', endpoint_1.endpointConvert(sdkEndpoint), sdkEndpoint.title, 'ts', 'endpoints');
    });
}
exports.process = process;
