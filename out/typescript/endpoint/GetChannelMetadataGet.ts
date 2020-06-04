import { Logger } from "core/modules/log/Logger";
import { Networking } from "core/modules/net/Networking";
import { Parser } from "core/modules/parse/Parser";

export class GetChannelMetadataGet {
  private httpMethod: string = 'get';

  constructor(
    public net: Networking,
    public parse: Parser,
    public log: Logger,
  ) {}

  static validate(include: string[]): boolean {

    if (!Array.isArray(include)) {
      return false;
    }

    return true;
  }

  static execute(include: string[]): boolean {
    // ...
    return true;
  }

}