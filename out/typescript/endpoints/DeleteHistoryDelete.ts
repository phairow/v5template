import { PubNubLogger } from "../log/PubNubLogger";
import { PubNubNetworking } from "../net/PubNubNetworking";
import { PubNubParser } from "../parse/PubNubParser";

export class DeleteHistoryDelete {
  private httpMethod: string = 'delete';

  constructor(private httpLib: PubNubNetworking, private serializationLib: PubNubParser) {
    this.httpLib = httpLib;
    this.serializationLib = serializationLib;
  }

  static validate(subKey: string, channels: string, start: unknown, end: unknown) {
            if (typeof (subKey) !== 'string') {
              return false;
            }
            if (typeof (channels) !== 'string') {
              return false;
            }
            if (typeof (start) !== 'number') {
              return false;
            }
            if (typeof (end) !== 'number') {
              return false;
            }
    return true;
  }

  static execute(subKey: string, channels: string, start: unknown, end: unknown) {
    // ...
  }

}