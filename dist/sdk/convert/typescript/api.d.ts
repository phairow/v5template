import { OpenAPIV3 } from 'openapi-types';
import { SdkApiDefinition } from "../../../definition/format/SdkApiDefinition";
import { SdkEndpoint } from "../../../definition/format/SdkEndpoint";
export declare function apiConvert(apis: SdkApiDefinition[]): {
    endpoints: SdkEndpoint[];
    parameters: OpenAPIV3.ParameterObject[];
    schemas: OpenAPIV3.SchemaObject[];
};
