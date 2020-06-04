import { Logger } from "core/modules/log/Logger";
import { Networking } from "core/modules/net/Networking";
import { Parser } from "core/modules/parse/Parser";
import { MetadataQueryParamSchema } from '../schema/MetadataQueryParamSchema';


export class PublishAMessageToAChannelPost {
  private httpMethod: string = 'post';

  constructor(
    public net: Networking,
    public parse: Parser,
    public log: Logger,
  ) {}

  static validate(pubKey: string, subKey: string, channel: string, callback: string, store: number, auth: string, meta: MetadataQueryParamSchema, uuid: string, ttl: number, signature: string, timestamp: number): boolean {

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

  static execute(pubKey: string, subKey: string, channel: string, callback: string, store: number, auth: string, meta: MetadataQueryParamSchema, uuid: string, ttl: number, signature: string, timestamp: number): boolean {
    // ...
    return true;
  }

}