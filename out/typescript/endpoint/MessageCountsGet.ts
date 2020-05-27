import { Logger } from "../../log/Logger";
import { Networking } from "../../net/Networking";
import { Parser } from "../../parse/Parser";

export class MessageCountsGet {
  private httpMethod: string = 'get';

  constructor(
    public net: Networking,
    public parse: Parser,
    public log: Logger,
  ) {}

  static validate(subKey: string, channels: string, auth: string, timetoken: unknown, channelsTimetoken: string) {

    if (typeof (subKey) !== 'string') {
      return false;
    }

    if (typeof (channels) !== 'string') {
      return false;
    }

    if (typeof (auth) !== 'string') {
      return false;
    }

    if (typeof (timetoken) !== 'number') {
      return false;
    }

    if (typeof (channelsTimetoken) !== 'string') {
      return false;
    }

    return true;
  }

  static execute(subKey: string, channels: string, auth: string, timetoken: unknown, channelsTimetoken: string) {
    // ...
  }

}