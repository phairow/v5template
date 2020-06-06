import {
  Logger,
  Parser,
  Networking,
  TokenManager,
} from "pubnub-core";

export class WhereNowGet {
  private httpMethod: string = 'get';

  constructor(
    public net: Networking,
    public parse: Parser,
    public log: Logger,
    public token: TokenManager,
  ) {}

  static validate(subKey: string, uuid: string, auth: string, callback: string, signature: string, timestamp: number): boolean {

    if (typeof (subKey) !== 'string') {
      return false;
    }

    if (typeof (uuid) !== 'string') {
      return false;
    }

    if (typeof (auth) !== 'string') {
      return false;
    }

    if (typeof (callback) !== 'string') {
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

  static execute(subKey: string, uuid: string, auth: string, callback: string, signature: string, timestamp: number): boolean {
    // ...
    return true;
  }

}