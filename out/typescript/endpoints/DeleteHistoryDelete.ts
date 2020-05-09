import { PubNubLogger } from "../log/PubNubLogger";
import { PubNubNetworking } from "../net/PubNubNetworking";
import { PubNubParser } from "../parse/PubNubParser";

class DeleteHistoryDelete {
  private httpMethod: string = 'delete';

  constructor(private httpLib: PubNubNetworking, private serializationLib: PubNubParser) {
    this.httpLib = httpLib;
    this.serializationLib = serializationLib;
  }

  
  validate(sub_key: string, channels: string, start: number, end: number) {

    if (typeof (sub_key) !== 'string') {
      return false;
    }

    if (typeof (channels) !== 'string') {
      return false;
    }

    return true;
  }

  execute(sub_key: string, channels: string, start: number, end: number) {
    // ...
  }

}