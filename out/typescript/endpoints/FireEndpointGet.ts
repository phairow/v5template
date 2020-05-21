import { PubNubLogger } from "../log/PubNubLogger";
import { PubNubNetworking } from "../net/PubNubNetworking";
import { PubNubParser } from "../parse/PubNubParser";

class FireEndpointGet {
  private httpMethod: string = 'get';

  constructor(private httpLib: PubNubNetworking, private serializationLib: PubNubParser) {
    this.httpLib = httpLib;
    this.serializationLib = serializationLib;
  }

  validate(pubKey: string, subKey: string, channel: string, callback: string, store: number, auth: string, meta: MetadataQueryParamSchema, uuid: string, norep: boolean) {
            if (typeof (pubKey) !== 'string') {
              return false;
            }
            if (typeof (subKey) !== 'string') {
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

  execute(pubKey: string, subKey: string, channel: string, callback: string, store: number, auth: string, meta: MetadataQueryParamSchema, uuid: string, norep: boolean) {
    // ...
  }

}