import { OpenAPIV3 } from 'openapi-types';
export declare class SchemaTypescript {
    jsonSchema: OpenAPIV3.SchemaObject;
    title: string;
    constructor(jsonSchema: OpenAPIV3.SchemaObject);
    comma(): string;
    comma_separated_list(): (text: string, render: Function) => string;
}
export declare function schemaConvert(jsonSchema: OpenAPIV3.SchemaObject): SchemaTypescript;
