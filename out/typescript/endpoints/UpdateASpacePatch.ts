import { PubNubLogger } from "../log/PubNubLogger";
import { PubNubNetworking } from "../net/PubNubNetworking";
import { PubNubParser } from "../parse/PubNubParser";

class UpdateASpacePatch {
  private httpMethod: string = 'patch';

  constructor(private httpLib: PubNubNetworking, private serializationLib: PubNubParser) {
    this.httpLib = httpLib;
    this.serializationLib = serializationLib;
  }

  validate(include: string[]) {
            if (!Array.isArray(include)) {
              return false;
            }
    return true;
  }

  execute(include: string[]) {
    // ...
  }

}