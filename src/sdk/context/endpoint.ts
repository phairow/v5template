import { SdkRequest } from "../../definition/format/SdkRequest";
import { StringUtil } from '../../util/string';
import {
  comma,
  comma_separated_list,
} from "../../util/mustache";
import * as _ from 'underscore.string';

export class EndpointTypescript extends SdkRequest {
  constructor(
    endpoint: SdkRequest,
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

  paramTypes(): string[] {
    let types: { [key: string ]: boolean } = {};

    for (const parameter of this.parameters) {
      if (parameter.isObject()) {
        types[parameter.schemaName()] = true;
      }
    }

    return Object.keys(types);
  }
}

export function endpointConvert(endpoint: SdkRequest) {
  return new EndpointTypescript(
    endpoint,
    StringUtil.lowerFirstChar(endpoint.title)
  );
}