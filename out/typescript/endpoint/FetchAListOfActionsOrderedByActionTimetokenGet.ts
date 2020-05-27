import { Logger } from "../../log/Logger";
import { Networking } from "../../net/Networking";
import { Parser } from "../../parse/Parser";

export class FetchAListOfActionsOrderedByActionTimetokenGet {
  private httpMethod: string = 'get';

  constructor(
    public net: Networking,
    public parse: Parser,
    public log: Logger,
  ) {}

  static validate(subKey: string, channel: string, start: string, end: string, limit: number, auth: string) {

    if (typeof (subKey) !== 'string') {
      return false;
    }

    if (typeof (channel) !== 'string') {
      return false;
    }

    if (typeof (start) !== 'string') {
      return false;
    }

    if (typeof (end) !== 'string') {
      return false;
    }

    if (!Number.isInteger(limit)) {
      return false;
    }

    if (typeof (auth) !== 'string') {
      return false;
    }

    return true;
  }

  static execute(subKey: string, channel: string, start: string, end: string, limit: number, auth: string) {
    // ...
  }

}