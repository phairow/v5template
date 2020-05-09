import { PubNubLogger } from "../log/PubNubLogger";
import { PubNubNetworking } from "../net/PubNubNetworking";
import { PubNubParser } from "../parse/PubNubParser";

class ApplyingPMAV2Get {
  private httpMethod: string = 'get';

  constructor(private httpLib: PubNubNetworking, private serializationLib: PubNubParser) {
    this.httpLib = httpLib;
    this.serializationLib = serializationLib;
  }

  
  validate(sub_key: string, signature: string, auth: string, uuid: string, timestamp: integer, ttl: integer, channel: string, channel-group: string, w: integer, r: integer, m: boolean, d: integer) {

    if (typeof (sub_key) !== 'string') {
      return false;
    }

    if (typeof (signature) !== 'string') {
      return false;
    }

    if (typeof (auth) !== 'string') {
      return false;
    }

    if (typeof (uuid) !== 'string') {
      return false;
    }

    if (!Number.isInteger(timestamp)) {
      return false;
    }

    if (!Number.isInteger(ttl)) {
      return false;
    }

    if (typeof (channel) !== 'string') {
      return false;
    }

    if (typeof (channel-group) !== 'string') {
      return false;
    }

    if (!Number.isInteger(w)) {
      return false;
    }

    if (!Number.isInteger(r)) {
      return false;
    }

    if (typeof (m) !== 'boolean') {
      return false;
    }

    if (!Number.isInteger(d)) {
      return false;
    }

    return true;
  }

  execute(sub_key: string, signature: string, auth: string, uuid: string, timestamp: integer, ttl: integer, channel: string, channel-group: string, w: integer, r: integer, m: boolean, d: integer) {
    // ...
  }

}