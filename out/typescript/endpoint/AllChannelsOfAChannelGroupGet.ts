import {
  Logger,
  Parser,
  Networking,
  TokenManager,
} from "pubnub-core";

export class AllChannelsOfAChannelGroupGet {
  private httpMethod: string = 'get';

  constructor(
    public net: Networking,
    public parse: Parser,
    public log: Logger,
    public token: TokenManager,
  ) {}

  static validate(subKey: string, group: string, auth: string, uuid: string, add: string, remove: string, signature: string, timestamp: number): boolean {

    if (typeof (subKey) !== 'string') {
      return false;
    }

    if (typeof (group) !== 'string') {
      return false;
    }

    if (typeof (auth) !== 'string') {
      return false;
    }

    if (typeof (uuid) !== 'string') {
      return false;
    }

    if (typeof (add) !== 'string') {
      return false;
    }

    if (typeof (remove) !== 'string') {
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

  static execute(subKey: string, group: string, auth: string, uuid: string, add: string, remove: string, signature: string, timestamp: number): boolean {
    // ...
    return true;
  }

}