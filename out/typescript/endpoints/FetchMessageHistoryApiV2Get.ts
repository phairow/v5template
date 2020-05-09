import { PubNubLogger } from "../log/PubNubLogger";
import { PubNubNetworking } from "../net/PubNubNetworking";
import { PubNubParser } from "../parse/PubNubParser";

class FetchMessageHistoryApiV2Get {
  private httpMethod: string = 'get';

  constructor(private httpLib: PubNubNetworking, private serializationLib: PubNubParser) {
    this.httpLib = httpLib;
    this.serializationLib = serializationLib;
  }

  
  validate(sub_key: string, channel: string, stringtoken: boolean, count: integer, reverse: boolean, start: number, end: number, include_token: boolean, auth: string, uuid: string, include_meta: boolean) {

    if (typeof (sub_key) !== 'string') {
      return false;
    }

    if (typeof (channel) !== 'string') {
      return false;
    }

    if (typeof (stringtoken) !== 'boolean') {
      return false;
    }

    if (!Number.isInteger(count)) {
      return false;
    }

    if (typeof (reverse) !== 'boolean') {
      return false;
    }

    if (typeof (include_token) !== 'boolean') {
      return false;
    }

    if (typeof (auth) !== 'string') {
      return false;
    }

    if (typeof (uuid) !== 'string') {
      return false;
    }

    if (typeof (include_meta) !== 'boolean') {
      return false;
    }

    return true;
  }

  execute(sub_key: string, channel: string, stringtoken: boolean, count: integer, reverse: boolean, start: number, end: number, include_token: boolean, auth: string, uuid: string, include_meta: boolean) {
    // ...
  }

}