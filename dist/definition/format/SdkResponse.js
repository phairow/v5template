"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SdkResponse {
    constructor(status, description, contentType, schema) {
        this.status = status;
        this.description = description;
        this.contentType = contentType;
        this.schema = schema;
    }
}
exports.SdkResponse = SdkResponse;
