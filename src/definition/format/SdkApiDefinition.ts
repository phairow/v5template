import { OpenAPIV3 } from 'openapi-types';
import { SdkEndpoint } from "./SdkEndpoint";

export class SdkApiDefinition {
  constructor(
    public endpoints: SdkEndpoint[],
    public parameters: OpenAPIV3.ParameterObject[],
    public schemas: OpenAPIV3.SchemaObject[],
  ) {};
}