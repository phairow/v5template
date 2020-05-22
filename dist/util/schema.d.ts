import { OpenAPIV3 } from 'openapi-types';
export declare class SchemaUtil {
    static isNumber(schema?: OpenAPIV3.SchemaObject): boolean;
    static isInteger(schema?: OpenAPIV3.SchemaObject): boolean;
    static isArray(schema?: OpenAPIV3.SchemaObject): boolean;
    static isString(schema?: OpenAPIV3.SchemaObject): boolean;
    static isBoolean(schema?: OpenAPIV3.SchemaObject): boolean;
    static isObject(schema?: OpenAPIV3.SchemaObject): boolean;
    static schemaName(schema?: OpenAPIV3.SchemaObject): string;
    static schemaType(schema?: OpenAPIV3.SchemaObject): string;
}
