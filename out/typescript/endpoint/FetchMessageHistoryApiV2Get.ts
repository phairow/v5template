import { Logger } from "../../log/Logger";
import { Networking } from "../../net/Networking";
import { Parser } from "../../parse/Parser";

export class FetchMessageHistoryApiV2Get {
  private httpMethod: string = 'get';

  constructor(
    public net: Networking,
    public parse: Parser,
    public log: Logger,
  ) {}

  static validate(subKey: string, channel: string, stringtoken: boolean, count: number, reverse: boolean, start: unknown, end: unknown, includeToken: boolean, auth: string, uuid: string, includeMeta: boolean) {

    if (typeof (subKey) !== 'string') {
      return false;
    }

    if (typeof (channel) !== 'string') {
      return false;
    }

    if (typeof (stringtoken) !== 'boolean') {
      return false;
    }

    if (!Number.isInteger(count)) {
      return false;
    }

    if (typeof (reverse) !== 'boolean') {
      return false;
    }

    if (typeof (start) !== 'number') {
      return false;
    }

    if (typeof (end) !== 'number') {
      return false;
    }

    if (typeof (includeToken) !== 'boolean') {
      return false;
    }

    if (typeof (auth) !== 'string') {
      return false;
    }

    if (typeof (uuid) !== 'string') {
      return false;
    }

    if (typeof (includeMeta) !== 'boolean') {
      return false;
    }

    return true;
  }

  static execute(subKey: string, channel: string, stringtoken: boolean, count: number, reverse: boolean, start: unknown, end: unknown, includeToken: boolean, auth: string, uuid: string, includeMeta: boolean) {
    // ...
  }

}