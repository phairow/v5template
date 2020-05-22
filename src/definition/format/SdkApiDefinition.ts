import { OpenAPIV3 } from 'openapi-types';
import { SdkEndpoint } from "./SdkEndpoint";

export interface SdkApiDefinition {
  endpoints: SdkEndpoint[];
  parameters: OpenAPIV3.ParameterObject[];
  schemas: OpenAPIV3.SchemaObject[];
}