import {
  Logger,
  Parser,
  Networking,
  TokenManager,
} from "pubnub-core";

export class FetchAListOfActionsOrderedByActionTimetokenGet {
  private httpMethod: string = 'get';

  constructor(
    public net: Networking,
    public parse: Parser,
    public log: Logger,
    public token: TokenManager,
  ) {}

  static validate(subKey: string, channel: string, start: string, end: string, limit: number, auth: string, signature: string, timestamp: number): boolean {

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

    if (typeof (signature) !== 'string') {
      return false;
    }

    if (!Number.isInteger(timestamp)) {
      return false;
    }

    return true;
  }

  static execute(subKey: string, channel: string, start: string, end: string, limit: number, auth: string, signature: string, timestamp: number): boolean {
    // ...
    return true;
  }

}