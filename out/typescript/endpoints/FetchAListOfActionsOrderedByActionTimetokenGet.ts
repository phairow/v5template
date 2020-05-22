import { PubNubLogger } from "../log/PubNubLogger";
import { PubNubNetworking } from "../net/PubNubNetworking";
import { PubNubParser } from "../parse/PubNubParser";

export class FetchAListOfActionsOrderedByActionTimetokenGet {
  private httpMethod: string = 'get';

  constructor(private httpLib: PubNubNetworking, private serializationLib: PubNubParser) {
    this.httpLib = httpLib;
    this.serializationLib = serializationLib;
  }

  static validate(subKey: string, channel: string, start: string, end: string, limit: number, auth: string) {
            if (typeof (subKey) !== 'string') {
              return false;
            }
            if (typeof (channel) !== 'string') {
              return false;
            }
            if (typeof (start) !== 'string') {
              return false;
            }
            if (typeof (end) !== 'string') {
              return false;
            }
            if (!Number.isInteger(limit)) {
              return false;
            }
            if (typeof (auth) !== 'string') {
              return false;
            }
    return true;
  }

  static execute(subKey: string, channel: string, start: string, end: string, limit: number, auth: string) {
    // ...
  }

}