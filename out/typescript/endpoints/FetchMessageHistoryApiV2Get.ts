import { PubNubLogger } from "../log/PubNubLogger";
import { PubNubNetworking } from "../net/PubNubNetworking";
import { PubNubParser } from "../parse/PubNubParser";

export class FetchMessageHistoryApiV2Get {
  private httpMethod: string = 'get';

  constructor(private httpLib: PubNubNetworking, private serializationLib: PubNubParser) {
    this.httpLib = httpLib;
    this.serializationLib = serializationLib;
  }

  static validate(subKey: string, channel: string, stringtoken: boolean, count: number, reverse: boolean, start: unknown, end: unknown, includeToken: boolean, auth: string, uuid: string, includeMeta: boolean) {
            if (typeof (subKey) !== 'string') {
              return false;
            }
            if (typeof (channel) !== 'string') {
              return false;
            }
            if (typeof (stringtoken) !== 'boolean') {
              return false;
            }
            if (!Number.isInteger(count)) {
              return false;
            }
            if (typeof (reverse) !== 'boolean') {
              return false;
            }
            if (typeof (start) !== 'number') {
              return false;
            }
            if (typeof (end) !== 'number') {
              return false;
            }
            if (typeof (includeToken) !== 'boolean') {
              return false;
            }
            if (typeof (auth) !== 'string') {
              return false;
            }
            if (typeof (uuid) !== 'string') {
              return false;
            }
            if (typeof (includeMeta) !== 'boolean') {
              return false;
            }
    return true;
  }

  static execute(subKey: string, channel: string, stringtoken: boolean, count: number, reverse: boolean, start: unknown, end: unknown, includeToken: boolean, auth: string, uuid: string, includeMeta: boolean) {
    // ...
  }

}