import { PubNubLogger } from "../log/PubNubLogger";
import { PubNubNetworking } from "../net/PubNubNetworking";
import { PubNubParser } from "../parse/PubNubParser";

export class MessageCountsGet {
  private httpMethod: string = 'get';

  constructor(private httpLib: PubNubNetworking, private serializationLib: PubNubParser) {
    this.httpLib = httpLib;
    this.serializationLib = serializationLib;
  }

  static validate(subKey: string, channels: string, auth: string, timetoken: unknown, channelsTimetoken: string) {
            if (typeof (subKey) !== 'string') {
              return false;
            }
            if (typeof (channels) !== 'string') {
              return false;
            }
            if (typeof (auth) !== 'string') {
              return false;
            }
            if (typeof (timetoken) !== 'number') {
              return false;
            }
            if (typeof (channelsTimetoken) !== 'string') {
              return false;
            }
    return true;
  }

  static execute(subKey: string, channels: string, auth: string, timetoken: unknown, channelsTimetoken: string) {
    // ...
  }

}