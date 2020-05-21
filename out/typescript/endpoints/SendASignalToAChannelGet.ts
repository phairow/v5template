import { PubNubLogger } from "../log/PubNubLogger";
import { PubNubNetworking } from "../net/PubNubNetworking";
import { PubNubParser } from "../parse/PubNubParser";

class SendASignalToAChannelGet {
  private httpMethod: string = 'get';

  constructor(private httpLib: PubNubNetworking, private serializationLib: PubNubParser) {
    this.httpLib = httpLib;
    this.serializationLib = serializationLib;
  }

  validate(pubKey: string, subKey: string, channel: string, callback: string, payload: string, uuid: string, auth: string) {
            if (typeof (pubKey) !== 'string') {
              return false;
            }
            if (typeof (subKey) !== 'string') {
              return false;
            }
            if (typeof (channel) !== 'string') {
              return false;
            }
            if (typeof (callback) !== 'string') {
              return false;
            }
            if (typeof (payload) !== 'string') {
              return false;
            }
            if (typeof (uuid) !== 'string') {
              return false;
            }
            if (typeof (auth) !== 'string') {
              return false;
            }
    return true;
  }

  execute(pubKey: string, subKey: string, channel: string, callback: string, payload: string, uuid: string, auth: string) {
    // ...
  }

}