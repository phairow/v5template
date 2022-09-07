"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const string_1 = require("../../../util/string");
function endpointConvert(endpoint) {
    return Object.assign(Object.assign({}, endpoint), { titlePropertyName: string_1.StringUtil.lowerFirstChar(endpoint.title) });
}
exports.endpointConvert = endpointConvert;
