"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SdkEndpoint_1 = require("../../../definition/format/SdkEndpoint");
const string_1 = require("../../../util/string");
const mustache_1 = require("../../../util/mustache");
class EndpointTypescript extends SdkEndpoint_1.SdkEndpoint {
    constructor(endpoint, titlePropertyName) {
        super(endpoint.httpMethod, endpoint.apiTitle, endpoint.apiDescription, endpoint.apiVersion, endpoint.title, endpoint.description, endpoint.parameters, endpoint.response, endpoint.errors);
        this.titlePropertyName = titlePropertyName;
    }
    comma() {
        return mustache_1.comma();
    }
    comma_separated_list() {
        return mustache_1.comma_separated_list();
    }
    paramTypes() {
        let types = {};
        for (const parameter of this.parameters) {
            if (parameter.isObject()) {
                types[parameter.schemaName()] = true;
            }
        }
        return Object.keys(types);
    }
}
exports.EndpointTypescript = EndpointTypescript;
function endpointConvert(endpoint) {
    return new EndpointTypescript(endpoint, string_1.StringUtil.lowerFirstChar(endpoint.title));
}
exports.endpointConvert = endpointConvert;
