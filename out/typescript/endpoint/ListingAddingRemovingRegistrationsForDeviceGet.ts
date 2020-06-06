import {
  Logger,
  Parser,
  Networking,
  TokenManager,
} from "pubnub-core";

export class ListingAddingRemovingRegistrationsForDeviceGet {
  private httpMethod: string = 'get';

  constructor(
    public net: Networking,
    public parse: Parser,
    public log: Logger,
    public token: TokenManager,
  ) {}

  static validate(subKey: string, pushToken: string, add: string, remove: string, type: string, uuid: string, signature: string, timestamp: number): boolean {

    if (typeof (subKey) !== 'string') {
      return false;
    }

    if (typeof (pushToken) !== 'string') {
      return false;
    }

    if (typeof (add) !== 'string') {
      return false;
    }

    if (typeof (remove) !== 'string') {
      return false;
    }

    if (typeof (type) !== 'string') {
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

  static execute(subKey: string, pushToken: string, add: string, remove: string, type: string, uuid: string, signature: string, timestamp: number): boolean {
    // ...
    return true;
  }

}