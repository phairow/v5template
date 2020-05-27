import { Logger } from "../../log/Logger";
import { Networking } from "../../net/Networking";
import { Parser } from "../../parse/Parser";

export class DeletingAChannelGroupGet {
  private httpMethod: string = 'get';

  constructor(
    public net: Networking,
    public parse: Parser,
    public log: Logger,
  ) {}

  static validate(subKey: string, groupName: string, auth: string, uuid: string) {

    if (typeof (subKey) !== 'string') {
      return false;
    }

    if (typeof (groupName) !== 'string') {
      return false;
    }

    if (typeof (auth) !== 'string') {
      return false;
    }

    if (typeof (uuid) !== 'string') {
      return false;
    }

    return true;
  }

  static execute(subKey: string, groupName: string, auth: string, uuid: string) {
    // ...
  }

}