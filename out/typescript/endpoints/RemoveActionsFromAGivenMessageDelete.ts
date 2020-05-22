import { PubNubLogger } from "../log/PubNubLogger";
import { PubNubNetworking } from "../net/PubNubNetworking";
import { PubNubParser } from "../parse/PubNubParser";

export class RemoveActionsFromAGivenMessageDelete {
  private httpMethod: string = 'delete';

  constructor(private httpLib: PubNubNetworking, private serializationLib: PubNubParser) {
    this.httpLib = httpLib;
    this.serializationLib = serializationLib;
  }

  static validate(subKey: string, channel: string, messageTimetoken: string, actionTimetoken: string, auth: string, uuid: string) {
            if (typeof (subKey) !== 'string') {
              return false;
            }
            if (typeof (channel) !== 'string') {
              return false;
            }
            if (typeof (messageTimetoken) !== 'string') {
              return false;
            }
            if (typeof (actionTimetoken) !== 'string') {
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

  static execute(subKey: string, channel: string, messageTimetoken: string, actionTimetoken: string, auth: string, uuid: string) {
    // ...
  }

}