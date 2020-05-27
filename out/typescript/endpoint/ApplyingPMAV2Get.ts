import { Logger } from "../../log/Logger";
import { Networking } from "../../net/Networking";
import { Parser } from "../../parse/Parser";

export class ApplyingPMAV2Get {
  private httpMethod: string = 'get';

  constructor(
    public net: Networking,
    public parse: Parser,
    public log: Logger,
  ) {}

  static validate(subKey: string, signature: string, auth: string, uuid: string, timestamp: number, ttl: number, channel: string, channelGroup: string, w: number, r: number, m: boolean, d: number) {

    if (typeof (subKey) !== 'string') {
      return false;
    }

    if (typeof (signature) !== 'string') {
      return false;
    }

    if (typeof (auth) !== 'string') {
      return false;
    }

    if (typeof (uuid) !== 'string') {
      return false;
    }

    if (!Number.isInteger(timestamp)) {
      return false;
    }

    if (!Number.isInteger(ttl)) {
      return false;
    }

    if (typeof (channel) !== 'string') {
      return false;
    }

    if (typeof (channelGroup) !== 'string') {
      return false;
    }

    if (!Number.isInteger(w)) {
      return false;
    }

    if (!Number.isInteger(r)) {
      return false;
    }

    if (typeof (m) !== 'boolean') {
      return false;
    }

    if (!Number.isInteger(d)) {
      return false;
    }

    return true;
  }

  static execute(subKey: string, signature: string, auth: string, uuid: string, timestamp: number, ttl: number, channel: string, channelGroup: string, w: number, r: number, m: boolean, d: number) {
    // ...
  }

}