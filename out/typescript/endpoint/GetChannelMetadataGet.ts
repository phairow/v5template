import { Logger } from "../../log/Logger";
import { Networking } from "../../net/Networking";
import { Parser } from "../../parse/Parser";

export class GetChannelMetadataGet {
  private httpMethod: string = 'get';

  constructor(
    public net: Networking,
    public parse: Parser,
    public log: Logger,
  ) {}

  static validate(include: string[]) {

    if (!Array.isArray(include)) {
      return false;
    }

    return true;
  }

  static execute(include: string[]) {
    // ...
  }

}