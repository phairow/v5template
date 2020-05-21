import { OpenAPIV3 } from 'openapi-types';
import { SdkApiDefinition } from "../../../definition/format/SdkApiDefinition";
import { endpointConvert } from '../../convert/typescript/endpoint';
import { SdkEndpoint } from "../../../definition/format/SdkEndpoint";
import * as _ from 'underscore.string';

export function apiConvert(apis: SdkApiDefinition[]) {
  let endpoints: SdkEndpoint[] = [];
  let parameters: OpenAPIV3.ParameterObject[] = [];
  let schemas: OpenAPIV3.SchemaObject[] = [];

  apis.forEach((api) => {
    endpoints.push(...api.endpoints.map((endpoint) => endpointConvert(endpoint)));
    parameters.push(...api.parameters);
    schemas.push(...api.schemas);
  });

  return {
    endpoints,
    parameters,
    schemas,
  };
}