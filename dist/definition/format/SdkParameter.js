"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        return this.schema && this.schema.type === 'number';
    }
    isInteger() {
        return this.schema && this.schema.type === 'integer';
    }
    isArray() {
        return this.schema && this.schema.type === 'array';
    }
    isString() {
        return this.schema && this.schema.type === 'string';
    }
    isBoolean() {
        return this.schema && this.schema.type === 'boolean';
    }
    isObject() {
        return this.schema && this.schema.type === 'object';
    }
    schemaName() {
        return this.isObject() && this.schema && this.schema.title || 'unknown_schema';
    }
    schemaType() {
        if (this.isInteger()) {
            return 'number';
        }
        if (this.isArray()) {
            let result = '[]';
            if ('items' in this.schema) {
                if ('type' in this.schema.items) {
                    result = this.schema.items.type + '[]';
                }
            }
            return result;
        }
        if (this.isString()) {
            return 'string';
        }
        if (this.isBoolean()) {
            return 'boolean';
        }
        if (this.isObject()) {
            return this.schemaName();
        }
        return 'unknown';
    }
}
exports.SdkParameter = SdkParameter;
