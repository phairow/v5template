import { PubNubLogger } from "../log/PubNubLogger";
import { PubNubNetworking } from "../net/PubNubNetworking";
import { PubNubParser } from "../parse/PubNubParser";

class FireEndpointGet {
  private httpMethod: string = 'get';

  constructor(private httpLib: PubNubNetworking, private serializationLib: PubNubParser) {
    this.httpLib = httpLib;
    this.serializationLib = serializationLib;
  }

  
  validate(pub_key: string, sub_key: string, channel: string, callback: string, store: integer, auth: string, meta: object, uuid: string, norep: boolean) {

    if (typeof (pub_key) !== 'string') {
      return false;
    }

    if (typeof (sub_key) !== 'string') {
      return false;
    }

    if (typeof (channel) !== 'string') {
      return false;
    }

    if (typeof (callback) !== 'string') {
      return false;
    }

    if (!Number.isInteger(store)) {
      return false;
    }

    if (typeof (auth) !== 'string') {
      return false;
    }

    if (typeof (uuid) !== 'string') {
      return false;
    }

    if (typeof (norep) !== 'boolean') {
      return false;
    }

    return true;
  }

  execute(pub_key: string, sub_key: string, channel: string, callback: string, store: integer, auth: string, meta: object, uuid: string, norep: boolean) {
    // ...
  }

}