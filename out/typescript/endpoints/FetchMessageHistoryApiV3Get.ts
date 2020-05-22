import { PubNubLogger } from "../log/PubNubLogger";
import { PubNubNetworking } from "../net/PubNubNetworking";
import { PubNubParser } from "../parse/PubNubParser";

export class FetchMessageHistoryApiV3Get {
  private httpMethod: string = 'get';

  constructor(private httpLib: PubNubNetworking, private serializationLib: PubNubParser) {
    this.httpLib = httpLib;
    this.serializationLib = serializationLib;
  }

  static validate(subKey: string, channels: string, max: number, reverse: boolean, start: unknown, end: unknown, auth: string, includeMeta: boolean) {
            if (typeof (subKey) !== 'string') {
              return false;
            }
            if (typeof (channels) !== 'string') {
              return false;
            }
            if (!Number.isInteger(max)) {
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
            if (typeof (auth) !== 'string') {
              return false;
            }
            if (typeof (includeMeta) !== 'boolean') {
              return false;
            }
    return true;
  }

  static execute(subKey: string, channels: string, max: number, reverse: boolean, start: unknown, end: unknown, auth: string, includeMeta: boolean) {
    // ...
  }

}