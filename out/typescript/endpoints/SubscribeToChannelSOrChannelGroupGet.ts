import { PubNubLogger } from "../log/PubNubLogger";
import { PubNubNetworking } from "../net/PubNubNetworking";
import { PubNubParser } from "../parse/PubNubParser";

class SubscribeToChannelSOrChannelGroupGet {
  private httpMethod: string = 'get';

  constructor(private httpLib: PubNubNetworking, private serializationLib: PubNubParser) {
    this.httpLib = httpLib;
    this.serializationLib = serializationLib;
  }

  validate(subKey: string, channel: string, callback: string, tt: string, tr: string, channleGroup: string, heartbeat: number, auth: string, uuid: string, filterExpr: string) {
            if (typeof (subKey) !== 'string') {
              return false;
            }
            if (typeof (channel) !== 'string') {
              return false;
            }
            if (typeof (callback) !== 'string') {
              return false;
            }
            if (typeof (tt) !== 'string') {
              return false;
            }
            if (typeof (tr) !== 'string') {
              return false;
            }
            if (typeof (channleGroup) !== 'string') {
              return false;
            }
            if (!Number.isInteger(heartbeat)) {
              return false;
            }
            if (typeof (auth) !== 'string') {
              return false;
            }
            if (typeof (uuid) !== 'string') {
              return false;
            }
            if (typeof (filterExpr) !== 'string') {
              return false;
            }
    return true;
  }

  execute(subKey: string, channel: string, callback: string, tt: string, tr: string, channleGroup: string, heartbeat: number, auth: string, uuid: string, filterExpr: string) {
    // ...
  }

}