"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const endpoint_1 = require("../../convert/typescript/endpoint");
function apiConvert(apis) {
    let endpoints = [];
    let parameters = [];
    let schemas = [];
    apis.forEach((api) => {
        endpoints.push(...api.endpoints.map((endpoint) => endpoint_1.endpointConvert(endpoint)));
        parameters.push(...api.parameters);
        schemas.push(...api.schemas);
    });
    return {
        endpoints,
        parameters,
        schemas,
    };
}
exports.apiConvert = apiConvert;
