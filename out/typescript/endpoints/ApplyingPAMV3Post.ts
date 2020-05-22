import { PubNubLogger } from "../log/PubNubLogger";
import { PubNubNetworking } from "../net/PubNubNetworking";
import { PubNubParser } from "../parse/PubNubParser";

export class ApplyingPAMV3Post {
  private httpMethod: string = 'post';

  constructor(private httpLib: PubNubNetworking, private serializationLib: PubNubParser) {
    this.httpLib = httpLib;
    this.serializationLib = serializationLib;
  }

  static validate(subKey: string, timestamp: number, signature: string) {
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

  static execute(subKey: string, timestamp: number, signature: string) {
    // ...
  }

}