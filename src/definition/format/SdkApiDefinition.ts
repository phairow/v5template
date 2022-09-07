import { OpenAPIV3 } from 'openapi-types';
import { SdkRequest } from "./SdkRequest";

export interface SdkApiDefinition {
  endpoints: SdkRequest[];
  parameters: OpenAPIV3.ParameterObject[];
  schemas: OpenAPIV3.SchemaObject[];
}