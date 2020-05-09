import { PubNubLogger } from "../log/PubNubLogger";
import { PubNubNetworking } from "../net/PubNubNetworking";
import { PubNubParser } from "../parse/PubNubParser";

class HistoryWithActionsGet {
  private httpMethod: string = 'get';

  constructor(private httpLib: PubNubNetworking, private serializationLib: PubNubParser) {
    this.httpLib = httpLib;
    this.serializationLib = serializationLib;
  }

  
  validate(sub_key: string, channel: string, auth: string, start: number, end: number, max: integer, include_meta: boolean) {

    if (typeof (sub_key) !== 'string') {
      return false;
    }

    if (typeof (channel) !== 'string') {
      return false;
    }

    if (typeof (auth) !== 'string') {
      return false;
    }

    if (!Number.isInteger(max)) {
      return false;
    }

    if (typeof (include_meta) !== 'boolean') {
      return false;
    }

    return true;
  }

  execute(sub_key: string, channel: string, auth: string, start: number, end: number, max: integer, include_meta: boolean) {
    // ...
  }

}