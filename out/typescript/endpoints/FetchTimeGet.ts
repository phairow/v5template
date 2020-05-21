import { PubNubLogger } from "../log/PubNubLogger";
import { PubNubNetworking } from "../net/PubNubNetworking";
import { PubNubParser } from "../parse/PubNubParser";

class FetchTimeGet {
  private httpMethod: string = 'get';

  constructor(private httpLib: PubNubNetworking, private serializationLib: PubNubParser) {
    this.httpLib = httpLib;
    this.serializationLib = serializationLib;
  }

  validate(callback: string, uuid: string) {
            if (typeof (callback) !== 'string') {
              return false;
            }
            if (typeof (uuid) !== 'string') {
              return false;
            }
    return true;
  }

  execute(callback: string, uuid: string) {
    // ...
  }

}