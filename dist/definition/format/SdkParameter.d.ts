import { OpenAPIV3 } from 'openapi-types';
export declare class SdkParameter {
    title: string;
    name: string;
    location: string;
    description: string;
    required: boolean;
    schema: OpenAPIV3.SchemaObject;
    constructor(title: string, name: string, location: string, description: string, required: boolean, schema: OpenAPIV3.SchemaObject);
    isNumber(): boolean;
    isInteger(): boolean;
    isArray(): boolean;
    isString(): boolean;
    isBoolean(): boolean;
    isObject(): boolean;
    schemaName(): string;
    schemaType(): string;
}
