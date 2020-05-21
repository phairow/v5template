import { PubNubLogger } from "../log/PubNubLogger";
import { PubNubNetworking } from "../net/PubNubNetworking";
import { PubNubParser } from "../parse/PubNubParser";

class ManagingDeviceRegistrationsAPNSHTTP2Get {
  private httpMethod: string = 'get';

  constructor(private httpLib: PubNubNetworking, private serializationLib: PubNubParser) {
    this.httpLib = httpLib;
    this.serializationLib = serializationLib;
  }

  validate(subKey: string, deviceApns2: string, uuid: string, auth: string, list: string, add: string, remove: string, environment: string, topic: string) {
            if (typeof (subKey) !== 'string') {
              return false;
            }
            if (typeof (deviceApns2) !== 'string') {
              return false;
            }
            if (typeof (uuid) !== 'string') {
              return false;
            }
            if (typeof (auth) !== 'string') {
              return false;
            }
            if (typeof (list) !== 'string') {
              return false;
            }
            if (typeof (add) !== 'string') {
              return false;
            }
            if (typeof (remove) !== 'string') {
              return false;
            }
            if (typeof (environment) !== 'string') {
              return false;
            }
            if (typeof (topic) !== 'string') {
              return false;
            }
    return true;
  }

  execute(subKey: string, deviceApns2: string, uuid: string, auth: string, list: string, add: string, remove: string, environment: string, topic: string) {
    // ...
  }

}