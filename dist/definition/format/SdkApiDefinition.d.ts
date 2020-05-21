import { OpenAPIV3 } from 'openapi-types';
import { SdkEndpoint } from "./SdkEndpoint";
export declare class SdkApiDefinition {
    endpoints: SdkEndpoint[];
    parameters: OpenAPIV3.ParameterObject[];
    schemas: OpenAPIV3.SchemaObject[];
    constructor(endpoints: SdkEndpoint[], parameters: OpenAPIV3.ParameterObject[], schemas: OpenAPIV3.SchemaObject[]);
}
