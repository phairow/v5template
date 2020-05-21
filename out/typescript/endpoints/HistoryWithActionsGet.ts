import { PubNubLogger } from "../log/PubNubLogger";
import { PubNubNetworking } from "../net/PubNubNetworking";
import { PubNubParser } from "../parse/PubNubParser";

class HistoryWithActionsGet {
  private httpMethod: string = 'get';

  constructor(private httpLib: PubNubNetworking, private serializationLib: PubNubParser) {
    this.httpLib = httpLib;
    this.serializationLib = serializationLib;
  }

  validate(subKey: string, channel: string, auth: string, start: unknown, end: unknown, max: number, includeMeta: boolean) {
            if (typeof (subKey) !== 'string') {
              return false;
            }
            if (typeof (channel) !== 'string') {
              return false;
            }
            if (typeof (auth) !== 'string') {
              return false;
            }
            if (typeof (start) !== 'number') {
              return false;
            }
            if (typeof (end) !== 'number') {
              return false;
            }
            if (!Number.isInteger(max)) {
              return false;
            }
            if (typeof (includeMeta) !== 'boolean') {
              return false;
            }
    return true;
  }

  execute(subKey: string, channel: string, auth: string, start: unknown, end: unknown, max: number, includeMeta: boolean) {
    // ...
  }

}