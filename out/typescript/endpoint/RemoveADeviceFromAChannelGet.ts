import { Logger } from "core/modules/log/Logger";
import { Networking } from "core/modules/net/Networking";
import { Parser } from "core/modules/parse/Parser";

export class RemoveADeviceFromAChannelGet {
  private httpMethod: string = 'get';

  constructor(
    public net: Networking,
    public parse: Parser,
    public log: Logger,
  ) {}

  static validate(subKey: string, devicesApns2: string, uuid: string, auth: string, add: string, remove: string, environment: string, topic: string, signature: string, timestamp: number): boolean {

    if (typeof (subKey) !== 'string') {
      return false;
    }

    if (typeof (devicesApns2) !== 'string') {
      return false;
    }

    if (typeof (uuid) !== 'string') {
      return false;
    }

    if (typeof (auth) !== 'string') {
      return false;
    }

    if (typeof (add) !== 'string') {
      return false;
    }

    if (typeof (remove) !== 'string') {
      return false;
    }

    if (typeof (environment) !== 'string') {
      return false;
    }

    if (typeof (topic) !== 'string') {
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

  static execute(subKey: string, devicesApns2: string, uuid: string, auth: string, add: string, remove: string, environment: string, topic: string, signature: string, timestamp: number): boolean {
    // ...
    return true;
  }

}