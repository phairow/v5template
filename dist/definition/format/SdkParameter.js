"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SdkParameter {
    constructor(name, location, description, required, schema) {
        this.name = name;
        this.location = location;
        this.description = description;
        this.required = required;
        this.schema = schema;
    }
}
exports.SdkParameter = SdkParameter;
