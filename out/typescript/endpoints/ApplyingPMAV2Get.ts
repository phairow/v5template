import { PubNubLogger } from "../log/PubNubLogger";
import { PubNubNetworking } from "../net/PubNubNetworking";
import { PubNubParser } from "../parse/PubNubParser";

export class ApplyingPMAV2Get {
  private httpMethod: string = 'get';

  constructor(private httpLib: PubNubNetworking, private serializationLib: PubNubParser) {
    this.httpLib = httpLib;
    this.serializationLib = serializationLib;
  }

  static validate(subKey: string, signature: string, auth: string, uuid: string, timestamp: number, ttl: number, channel: string, channelGroup: string, w: number, r: number, m: boolean, d: number) {
            if (typeof (subKey) !== 'string') {
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
            if (typeof (channelGroup) !== 'string') {
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

  static execute(subKey: string, signature: string, auth: string, uuid: string, timestamp: number, ttl: number, channel: string, channelGroup: string, w: number, r: number, m: boolean, d: number) {
    // ...
  }

}