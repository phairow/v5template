import { PubNubLogger } from "../log/PubNubLogger";
import { PubNubNetworking } from "../net/PubNubNetworking";
import { PubNubParser } from "../parse/PubNubParser";

class WhereNowGet {
  private httpMethod: string = 'get';

  constructor(private httpLib: PubNubNetworking, private serializationLib: PubNubParser) {
    this.httpLib = httpLib;
    this.serializationLib = serializationLib;
  }

  validate(subKey: string, uuid: string, auth: string, callback: string) {
            if (typeof (subKey) !== 'string') {
              return false;
            }
            if (typeof (uuid) !== 'string') {
              return false;
            }
            if (typeof (auth) !== 'string') {
              return false;
            }
            if (typeof (callback) !== 'string') {
              return false;
            }
    return true;
  }

  execute(subKey: string, uuid: string, auth: string, callback: string) {
    // ...
  }

}