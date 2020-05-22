import { SdkEndpoint } from "../../../definition/format/SdkEndpoint";
import { StringUtil } from '../../../util/string';
import { SdkApiDefinition } from "../../../definition/format/SdkApiDefinition";
import {
  comma,
  comma_separated_list,
} from "../../../util/mustache";
import * as _ from 'underscore.string';

export class EndpointTypescript extends SdkEndpoint {
  constructor(
    endpoint: SdkEndpoint,
    public titlePropertyName: string
  ) {
    super(
      endpoint.httpMethod,
      endpoint.apiTitle,
      endpoint.apiDescription,
      endpoint.apiVersion,
      endpoint.title,
      endpoint.description,
      endpoint.parameters,
      endpoint.response,
      endpoint.errors
    );
  }

  comma() {
    return comma();
  }

  comma_separated_list() {
    return comma_separated_list();
  }

}

export function endpointConvert(endpoint: SdkEndpoint) {
  return new EndpointTypescript(
    endpoint,
    StringUtil.lowerFirstChar(endpoint.title)
  );
}