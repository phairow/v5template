import { OpenAPIV3 } from 'openapi-types';
import { SdkApiDefinition } from "../../../definition/format/SdkApiDefinition";
import { EndpointTypescript } from '../../convert/typescript/endpoint';
export declare class ApiTypescript {
    endpoints: EndpointTypescript[];
    parameters: OpenAPIV3.ParameterObject[];
    schemas: OpenAPIV3.SchemaObject[];
    constructor(endpoints: EndpointTypescript[], parameters: OpenAPIV3.ParameterObject[], schemas: OpenAPIV3.SchemaObject[]);
    comma(): string;
    comma_separated_list(): (text: string, render: Function) => string;
    paramTypes(): string[];
}
export declare function apiConvert(apis: SdkApiDefinition[]): ApiTypescript;
