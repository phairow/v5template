"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SchemaUtil {
    static isNumber(schema) {
        return !!schema && schema.type === 'number';
    }
    static isInteger(schema) {
        return !!schema && schema.type === 'integer';
    }
    static isArray(schema) {
        return !!schema && schema.type === 'array';
    }
    static isString(schema) {
        return !!schema && schema.type === 'string';
    }
    static isBoolean(schema) {
        return !!schema && schema.type === 'boolean';
    }
    static isObject(schema) {
        return !!schema && schema.type === 'object';
    }
    static schemaName(schema) {
        return SchemaUtil.isObject(schema) && !!schema && schema.title || 'unknown_schema';
    }
    static schemaType(schema) {
        if (SchemaUtil.isInteger(schema)) {
            return 'number';
        }
        if (!!schema && SchemaUtil.isArray(schema)) {
            let result = '[]';
            if ('items' in schema) {
                if ('type' in schema.items) {
                    result = schema.items.type + '[]';
                }
            }
            return result;
        }
        if (SchemaUtil.isString(schema)) {
            return 'string';
        }
        if (SchemaUtil.isBoolean(schema)) {
            return 'boolean';
        }
        if (SchemaUtil.isObject(schema)) {
            return SchemaUtil.schemaName(schema);
        }
        return 'unknown';
    }
}
exports.SchemaUtil = SchemaUtil;
