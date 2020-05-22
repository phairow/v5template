import { OpenAPIV3 } from 'openapi-types';
import { SdkApiDefinition } from "../../../definition/format/SdkApiDefinition";
import { endpointConvert, EndpointTypescript } from '../../convert/typescript/endpoint';
import { SdkEndpoint } from "../../../definition/format/SdkEndpoint";
import {
  comma,
  comma_separated_list,
} from "../../../util/mustache";
import * as _ from 'underscore.string';

export class ApiTypescript {

  constructor(
    public endpoints: EndpointTypescript[],
    public parameters: OpenAPIV3.ParameterObject[],
    public schemas: OpenAPIV3.SchemaObject[]
  ){}

  comma() {
    return comma();
  }

  comma_separated_list() {
    return comma_separated_list();
  }

  paramTypes(): string[] {
    let types: { [key: string ]: boolean } = {};

    for (const endpoint of this.endpoints) {
      for (const parameter of endpoint.parameters) {
        if (parameter.isObject()) {
          types[parameter.schemaName()] = true;
        }
      }
    }

    return Object.keys(types);
  }
}

export function apiConvert(apis: SdkApiDefinition[]) {
  let endpoints: EndpointTypescript[] = [];
  let parameters: OpenAPIV3.ParameterObject[] = [];
  let schemas: OpenAPIV3.SchemaObject[] = [];

  apis.forEach((api) => {
    endpoints.push(...api.endpoints.map((endpoint) => endpointConvert(endpoint)));
    parameters.push(...api.parameters);
    schemas.push(...api.schemas);
  });

  return new ApiTypescript(
    endpoints,
    parameters,
    schemas
  );
}