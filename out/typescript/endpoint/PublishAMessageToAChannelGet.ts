import {
  Logger,
  Parser,
  Networking,
  TokenManager,
} from "pubnub-core";
import { MetadataQueryParamSchema } from '../schema/MetadataQueryParamSchema';


export class PublishAMessageToAChannelGet {
  private httpMethod: string = 'get';

  constructor(
    public net: Networking,
    public parse: Parser,
    public log: Logger,
    public token: TokenManager,
  ) {}

  static validate(pubKey: string, subKey: string, channel: string, callback: string, payload: string, store: number, auth: string, meta: MetadataQueryParamSchema, uuid: string, ttl: number, signature: string, timestamp: number): boolean {

    if (typeof (pubKey) !== 'string') {
      return false;
    }

    if (typeof (subKey) !== 'string') {
      return false;
    }

    if (typeof (channel) !== 'string') {
      return false;
    }

    if (typeof (callback) !== 'string') {
      return false;
    }

    if (typeof (payload) !== 'string') {
      return false;
    }

    if (!Number.isInteger(store)) {
      return false;
    }

    if (typeof (auth) !== 'string') {
      return false;
    }


    if (typeof (uuid) !== 'string') {
      return false;
    }

    if (!Number.isInteger(ttl)) {
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

  static execute(pubKey: string, subKey: string, channel: string, callback: string, payload: string, store: number, auth: string, meta: MetadataQueryParamSchema, uuid: string, ttl: number, signature: string, timestamp: number): boolean {
    // ...
    return true;
  }

}