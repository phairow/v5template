import { Logger } from "../../log/Logger";
import { Networking } from "../../net/Networking";
import { Parser } from "../../parse/Parser";

export class ManagingDeviceRegistrationsAPNSHTTP2Get {
  private httpMethod: string = 'get';

  constructor(
    public net: Networking,
    public parse: Parser,
    public log: Logger,
  ) {}

  static validate(subKey: string, deviceApns2: string, uuid: string, auth: string, list: string, add: string, remove: string, environment: string, topic: string) {

    if (typeof (subKey) !== 'string') {
      return false;
    }

    if (typeof (deviceApns2) !== 'string') {
      return false;
    }

    if (typeof (uuid) !== 'string') {
      return false;
    }

    if (typeof (auth) !== 'string') {
      return false;
    }

    if (typeof (list) !== 'string') {
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

    return true;
  }

  static execute(subKey: string, deviceApns2: string, uuid: string, auth: string, list: string, add: string, remove: string, environment: string, topic: string) {
    // ...
  }

}