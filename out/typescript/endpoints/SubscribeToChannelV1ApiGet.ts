import { PubNubLogger } from "../log/PubNubLogger";
import { PubNubNetworking } from "../net/PubNubNetworking";
import { PubNubParser } from "../parse/PubNubParser";

class SubscribeToChannelV1ApiGet {
  private httpMethod: string = 'get';

  constructor(private httpLib: PubNubNetworking, private serializationLib: PubNubParser) {
    this.httpLib = httpLib;
    this.serializationLib = serializationLib;
  }

  validate(subKey: string, channel: string, callback: string, timetoken: string, channleGroup: string, state: string, heartbeat: number, auth: string, uuid: string) {
            if (typeof (subKey) !== 'string') {
              return false;
            }
            if (typeof (channel) !== 'string') {
              return false;
            }
            if (typeof (callback) !== 'string') {
              return false;
            }
            if (typeof (timetoken) !== 'string') {
              return false;
            }
            if (typeof (channleGroup) !== 'string') {
              return false;
            }
            if (typeof (state) !== 'string') {
              return false;
            }
            if (!Number.isInteger(heartbeat)) {
              return false;
            }
            if (typeof (auth) !== 'string') {
              return false;
            }
            if (typeof (uuid) !== 'string') {
              return false;
            }
    return true;
  }

  execute(subKey: string, channel: string, callback: string, timetoken: string, channleGroup: string, state: string, heartbeat: number, auth: string, uuid: string) {
    // ...
  }

}