import { SdkEndpoint } from "../../../definition/format/SdkEndpoint";
import { StringUtil } from '../../../util/string';
import * as _ from 'underscore.string';
import { SdkApiDefinition } from "../../../definition/format/SdkApiDefinition";

export function endpointConvert(endpoint: SdkEndpoint) {
  return {
    ...endpoint,
    titlePropertyName: StringUtil.lowerFirstChar(endpoint.title)
  };
}