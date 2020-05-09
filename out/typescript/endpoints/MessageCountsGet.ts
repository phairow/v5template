import { PubNubLogger } from "../log/PubNubLogger";
import { PubNubNetworking } from "../net/PubNubNetworking";
import { PubNubParser } from "../parse/PubNubParser";

class MessageCountsGet {
  private httpMethod: string = 'get';

  constructor(private httpLib: PubNubNetworking, private serializationLib: PubNubParser) {
    this.httpLib = httpLib;
    this.serializationLib = serializationLib;
  }

  
  validate(sub_key: string, channels: string, auth: string, timetoken: number, channelsTimetoken: string) {

    if (typeof (sub_key) !== 'string') {
      return false;
    }

    if (typeof (channels) !== 'string') {
      return false;
    }

    if (typeof (auth) !== 'string') {
      return false;
    }

    if (typeof (channelsTimetoken) !== 'string') {
      return false;
    }

    return true;
  }

  execute(sub_key: string, channels: string, auth: string, timetoken: number, channelsTimetoken: string) {
    // ...
  }

}