import { PubNubLogger } from "../log/PubNubLogger";
import { PubNubNetworking } from "../net/PubNubNetworking";
import { PubNubParser } from "../parse/PubNubParser";

class SubscribeToChannelSOrChannelGroupGet {
  private httpMethod: string = 'get';

  constructor(private httpLib: PubNubNetworking, private serializationLib: PubNubParser) {
    this.httpLib = httpLib;
    this.serializationLib = serializationLib;
  }

  
  validate(sub_key: string, channel: string, callback: string, tt: string, tr: string, channle-group: string, heartbeat: integer, auth: string, uuid: string, filter-expr: string) {

    if (typeof (sub_key) !== 'string') {
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

    if (typeof (channle-group) !== 'string') {
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

    if (typeof (filter-expr) !== 'string') {
      return false;
    }

    return true;
  }

  execute(sub_key: string, channel: string, callback: string, tt: string, tr: string, channle-group: string, heartbeat: integer, auth: string, uuid: string, filter-expr: string) {
    // ...
  }

}