"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../util/schema");
class SdkParameter {
    constructor(title, name, location, description, required, schema) {
        this.title = title;
        this.name = name;
        this.location = location;
        this.description = description;
        this.required = required;
        this.schema = schema;
    }
    isNumber() {
        return schema_1.SchemaUtil.isNumber(this.schema);
    }
    isInteger() {
        return schema_1.SchemaUtil.isInteger(this.schema);
    }
    isArray() {
        return schema_1.SchemaUtil.isArray(this.schema);
    }
    isString() {
        return schema_1.SchemaUtil.isString(this.schema);
    }
    isBoolean() {
        return schema_1.SchemaUtil.isBoolean(this.schema);
    }
    isObject() {
        return schema_1.SchemaUtil.isObject(this.schema);
    }
    schemaName() {
        return schema_1.SchemaUtil.schemaName(this.schema);
    }
    schemaType() {
        return schema_1.SchemaUtil.schemaType(this.schema);
    }
}
exports.SdkParameter = SdkParameter;
