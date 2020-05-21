import { PubNubLogger } from "../log/PubNubLogger";
import { PubNubNetworking } from "../net/PubNubNetworking";
import { PubNubParser } from "../parse/PubNubParser";

class ApplyingPAMV3Post {
  private httpMethod: string = 'post';

  constructor(private httpLib: PubNubNetworking, private serializationLib: PubNubParser) {
    this.httpLib = httpLib;
    this.serializationLib = serializationLib;
  }

  validate(subKey: string, timestamp: number, signature: string) {
            if (typeof (subKey) !== 'string') {
              return false;
            }
            if (!Number.isInteger(timestamp)) {
              return false;
            }
            if (typeof (signature) !== 'string') {
              return false;
            }
    return true;
  }

  execute(subKey: string, timestamp: number, signature: string) {
    // ...
  }

}