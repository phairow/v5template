import { Logger } from "core/modules/log/Logger";
import { Networking } from "core/modules/net/Networking";
import { Parser } from "core/modules/parse/Parser";

export class GlobalHereNowGet {
  private httpMethod: string = 'get';

  constructor(
    public net: Networking,
    public parse: Parser,
    public log: Logger,
  ) {}

  static validate(subKey: string, channelGroup: string, auth: string, disableUuids: string, state: string, callback: string, uuid: string, signature: string, timestamp: number): boolean {

    if (typeof (subKey) !== 'string') {
      return false;
    }

    if (typeof (channelGroup) !== 'string') {
      return false;
    }

    if (typeof (auth) !== 'string') {
      return false;
    }

    if (typeof (disableUuids) !== 'string') {
      return false;
    }

    if (typeof (state) !== 'string') {
      return false;
    }

    if (typeof (callback) !== 'string') {
      return false;
    }

    if (typeof (uuid) !== 'string') {
      return false;
    }

    if (typeof (signature) !== 'string') {
      return false;
    }

    if (!Number.isInteger(timestamp)) {
      return false;
    }

    return true;
  }

  static execute(subKey: string, channelGroup: string, auth: string, disableUuids: string, state: string, callback: string, uuid: string, signature: string, timestamp: number): boolean {
    // ...
    return true;
  }

}