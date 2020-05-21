import { PubNubLogger } from "../log/PubNubLogger";
import { PubNubNetworking } from "../net/PubNubNetworking";
import { PubNubParser } from "../parse/PubNubParser";

class SettingUserStateGet {
  private httpMethod: string = 'get';

  constructor(private httpLib: PubNubNetworking, private serializationLib: PubNubParser) {
    this.httpLib = httpLib;
    this.serializationLib = serializationLib;
  }

  validate(subKey: string, channel: string, channelGroup: string, uuid: string, auth: string, state: string, callback: string) {
            if (typeof (subKey) !== 'string') {
              return false;
            }
            if (typeof (channel) !== 'string') {
              return false;
            }
            if (typeof (channelGroup) !== 'string') {
              return false;
            }
            if (typeof (uuid) !== 'string') {
              return false;
            }
            if (typeof (auth) !== 'string') {
              return false;
            }
            if (typeof (state) !== 'string') {
              return false;
            }
            if (typeof (callback) !== 'string') {
              return false;
            }
    return true;
  }

  execute(subKey: string, channel: string, channelGroup: string, uuid: string, auth: string, state: string, callback: string) {
    // ...
  }

}