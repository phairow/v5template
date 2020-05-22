import { PubNubLogger } from "../log/PubNubLogger";
import { PubNubNetworking } from "../net/PubNubNetworking";
import { PubNubParser } from "../parse/PubNubParser";

export class PublishAMessageToAChannelGet {
  private httpMethod: string = 'get';

  constructor(private httpLib: PubNubNetworking, private serializationLib: PubNubParser) {
    this.httpLib = httpLib;
    this.serializationLib = serializationLib;
  }

  static validate(pubKey: string, subKey: string, channel: string, callback: string, payload: string, store: number, auth: string, meta: MetadataQueryParamSchema, uuid: string, ttl: number) {
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
            if (typeof (payload) !== 'string') {
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
            if (!Number.isInteger(ttl)) {
              return false;
            }
    return true;
  }

  static execute(pubKey: string, subKey: string, channel: string, callback: string, payload: string, store: number, auth: string, meta: MetadataQueryParamSchema, uuid: string, ttl: number) {
    // ...
  }

}