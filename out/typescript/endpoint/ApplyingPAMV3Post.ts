import { Logger } from "../../log/Logger";
import { Networking } from "../../net/Networking";
import { Parser } from "../../parse/Parser";

export class ApplyingPAMV3Post {
  private httpMethod: string = 'post';

  constructor(
    public net: Networking,
    public parse: Parser,
    public log: Logger,
  ) {}

  static validate(subKey: string, timestamp: number, signature: string) {

    if (typeof (subKey) !== 'string') {
      return false;
    }

    if (!Number.isInteger(timestamp)) {
      return false;
    }

    if (typeof (signature) !== 'string') {
      return false;
    }

    return true;
  }

  static execute(subKey: string, timestamp: number, signature: string) {
    // ...
  }

}