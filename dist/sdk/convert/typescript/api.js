"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const endpoint_1 = require("../../convert/typescript/endpoint");
function apiConvert(apis) {
    let endpoints = [];
    apis.forEach((api) => {
        endpoints.push(...api.endpoints.map((endpoint) => endpoint_1.endpointConvert(endpoint)));
    });
    return {
        endpoints
    };
}
exports.apiConvert = apiConvert;
