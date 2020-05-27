import { Logger } from "../../log/Logger";
import { Networking } from "../../net/Networking";
import { Parser } from "../../parse/Parser";

export class SubscribeToChannelSOrChannelGroupGet {
  private httpMethod: string = 'get';

  constructor(
    public net: Networking,
    public parse: Parser,
    public log: Logger,
  ) {}

  static validate(subKey: string, channel: string, callback: string, tt: string, tr: string, channleGroup: string, heartbeat: number, auth: string, uuid: string, filterExpr: string) {

    if (typeof (subKey) !== 'string') {
      return false;
    }

    if (typeof (channel) !== 'string') {
      return false;
    }

    if (typeof (callback) !== 'string') {
      return false;
    }

    if (typeof (tt) !== 'string') {
      return false;
    }

    if (typeof (tr) !== 'string') {
      return false;
    }

    if (typeof (channleGroup) !== 'string') {
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

    if (typeof (filterExpr) !== 'string') {
      return false;
    }

    return true;
  }

  static execute(subKey: string, channel: string, callback: string, tt: string, tr: string, channleGroup: string, heartbeat: number, auth: string, uuid: string, filterExpr: string) {
    // ...
  }

}