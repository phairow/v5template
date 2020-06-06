import {
  Logger,
  Parser,
  Networking,
  TokenManager,
} from "pubnub-core";

export class FetchTimeGet {
  private httpMethod: string = 'get';

  constructor(
    public net: Networking,
    public parse: Parser,
    public log: Logger,
    public token: TokenManager,
  ) {}

  static validate(callback: string, uuid: string): boolean {

    if (typeof (callback) !== 'string') {
      return false;
    }

    if (typeof (uuid) !== 'string') {
      return false;
    }

    return true;
  }

  static execute(callback: string, uuid: string): boolean {
    // ...
    return true;
  }

}