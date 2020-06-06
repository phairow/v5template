import {
  Logger,
  Parser,
  Networking,
  TokenManager,
} from "pubnub-core";

export class SubscribeToChannelSOrChannelGroupSGet {
  private httpMethod: string = 'get';

  constructor(
    public net: Networking,
    public parse: Parser,
    public log: Logger,
    public token: TokenManager,
  ) {}

  static validate(subKey: string, channel: string, callback: string, tt: string, tr: string, channelGroup: string, heartbeat: number, auth: string, uuid: string, filterExpr: string, signature: string, timestamp: number): boolean {

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

    if (typeof (channelGroup) !== 'string') {
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

    if (typeof (signature) !== 'string') {
      return false;
    }

    if (!Number.isInteger(timestamp)) {
      return false;
    }

    return true;
  }

  static execute(subKey: string, channel: string, callback: string, tt: string, tr: string, channelGroup: string, heartbeat: number, auth: string, uuid: string, filterExpr: string, signature: string, timestamp: number): boolean {
    // ...
    return true;
  }

}