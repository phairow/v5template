"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const endpoint_1 = require("../../convert/typescript/endpoint");
const mustache_1 = require("../../../util/mustache");
class ApiTypescript {
    constructor(endpoints, parameters, schemas) {
        this.endpoints = endpoints;
        this.parameters = parameters;
        this.schemas = schemas;
    }
    comma() {
        return mustache_1.comma();
    }
    comma_separated_list() {
        return mustache_1.comma_separated_list();
    }
    paramTypes() {
        let types = {};
        for (const endpoint of this.endpoints) {
            for (const parameter of endpoint.parameters) {
                if (parameter.isObject()) {
                    types[parameter.schemaName()] = true;
                }
            }
        }
        return Object.keys(types);
    }
}
exports.ApiTypescript = ApiTypescript;
function apiConvert(apis) {
    let endpoints = [];
    let parameters = [];
    let schemas = [];
    apis.forEach((api) => {
        endpoints.push(...api.endpoints.map((endpoint) => endpoint_1.endpointConvert(endpoint)));
        parameters.push(...api.parameters);
        schemas.push(...api.schemas);
    });
    return new ApiTypescript(endpoints, parameters, schemas);
}
exports.apiConvert = apiConvert;
