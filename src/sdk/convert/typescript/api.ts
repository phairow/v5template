import { SdkApiDefinition } from "../../../definition/format/SdkApiDefinition";
import { endpointConvert } from '../../convert/typescript/endpoint';
import * as _ from 'underscore.string';

export function apiConvert(apis: SdkApiDefinition[]) {
  let endpoints: any[] = [];

  apis.forEach((api) => {
    endpoints.push(...api.endpoints.map((endpoint) => endpointConvert(endpoint)));
  });

  return {
    endpoints
  };
}