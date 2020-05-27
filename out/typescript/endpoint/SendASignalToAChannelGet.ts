import { Logger } from "../../log/Logger";
import { Networking } from "../../net/Networking";
import { Parser } from "../../parse/Parser";

export class SendASignalToAChannelGet {
  private httpMethod: string = 'get';

  constructor(
    public net: Networking,
    public parse: Parser,
    public log: Logger,
  ) {}

  static validate(pubKey: string, subKey: string, channel: string, callback: string, payload: string, uuid: string, auth: string) {

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

  static execute(pubKey: string, subKey: string, channel: string, callback: string, payload: string, uuid: string, auth: string) {
    // ...
  }

}