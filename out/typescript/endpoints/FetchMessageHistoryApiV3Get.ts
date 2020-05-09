import { PubNubLogger } from "../log/PubNubLogger";
import { PubNubNetworking } from "../net/PubNubNetworking";
import { PubNubParser } from "../parse/PubNubParser";

class FetchMessageHistoryApiV3Get {
  private httpMethod: string = 'get';

  constructor(private httpLib: PubNubNetworking, private serializationLib: PubNubParser) {
    this.httpLib = httpLib;
    this.serializationLib = serializationLib;
  }

  
  validate(sub_key: string, channels: string, max: integer, reverse: boolean, start: number, end: number, auth: string, include_meta: boolean) {

    if (typeof (sub_key) !== 'string') {
      return false;
    }

    if (typeof (channels) !== 'string') {
      return false;
    }

    if (!Number.isInteger(max)) {
      return false;
    }

    if (typeof (reverse) !== 'boolean') {
      return false;
    }

    if (typeof (auth) !== 'string') {
      return false;
    }

    if (typeof (include_meta) !== 'boolean') {
      return false;
    }

    return true;
  }

  execute(sub_key: string, channels: string, max: integer, reverse: boolean, start: number, end: number, auth: string, include_meta: boolean) {
    // ...
  }

}