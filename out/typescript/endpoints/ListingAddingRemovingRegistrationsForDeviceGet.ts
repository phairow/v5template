import { PubNubLogger } from "../log/PubNubLogger";
import { PubNubNetworking } from "../net/PubNubNetworking";
import { PubNubParser } from "../parse/PubNubParser";

class ListingAddingRemovingRegistrationsForDeviceGet {
  private httpMethod: string = 'get';

  constructor(private httpLib: PubNubNetworking, private serializationLib: PubNubParser) {
    this.httpLib = httpLib;
    this.serializationLib = serializationLib;
  }

  validate(subKey: string, pushToken: string, type: string, uuid: string) {
            if (typeof (subKey) !== 'string') {
              return false;
            }
            if (typeof (pushToken) !== 'string') {
              return false;
            }
            if (typeof (type) !== 'string') {
              return false;
            }
            if (typeof (uuid) !== 'string') {
              return false;
            }
    return true;
  }

  execute(subKey: string, pushToken: string, type: string, uuid: string) {
    // ...
  }

}