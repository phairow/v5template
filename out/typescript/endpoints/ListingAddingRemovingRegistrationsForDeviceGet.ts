import { PubNubLogger } from "../log/PubNubLogger";
import { PubNubNetworking } from "../net/PubNubNetworking";
import { PubNubParser } from "../parse/PubNubParser";

class ListingAddingRemovingRegistrationsForDeviceGet {
  private httpMethod: string = 'get';

  constructor(private httpLib: PubNubNetworking, private serializationLib: PubNubParser) {
    this.httpLib = httpLib;
    this.serializationLib = serializationLib;
  }

  
  validate(sub_key: string, push_token: string, type: string, uuid: string) {

    if (typeof (sub_key) !== 'string') {
      return false;
    }

    if (typeof (push_token) !== 'string') {
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

  execute(sub_key: string, push_token: string, type: string, uuid: string) {
    // ...
  }

}