import {
  Logger,
  Parser,
  Networking,
  TokenManager,
} from "pubnub-core";

export class HistoryWithActionsGet {
  private httpMethod: string = 'get';

  constructor(
    public net: Networking,
    public parse: Parser,
    public log: Logger,
    public token: TokenManager,
  ) {}

  static validate(subKey: string, channel: string, auth: string, start: unknown, end: unknown, max: number, includeMeta: boolean, signature: string, timestamp: number): boolean {

    if (typeof (subKey) !== 'string') {
      return false;
    }

    if (typeof (channel) !== 'string') {
      return false;
    }

    if (typeof (auth) !== 'string') {
      return false;
    }

    if (typeof (start) !== 'number') {
      return false;
    }

    if (typeof (end) !== 'number') {
      return false;
    }

    if (!Number.isInteger(max)) {
      return false;
    }

    if (typeof (includeMeta) !== 'boolean') {
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

  static execute(subKey: string, channel: string, auth: string, start: unknown, end: unknown, max: number, includeMeta: boolean, signature: string, timestamp: number): boolean {
    // ...
    return true;
  }

}