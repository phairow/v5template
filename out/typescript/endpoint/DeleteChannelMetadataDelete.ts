import { Logger } from "core/modules/log/Logger";
import { Networking } from "core/modules/net/Networking";
import { Parser } from "core/modules/parse/Parser";

export class DeleteChannelMetadataDelete {
  private httpMethod: string = 'delete';

  constructor(
    public net: Networking,
    public parse: Parser,
    public log: Logger,
  ) {}

  static validate(): boolean {

    return true;
  }

  static execute(): boolean {
    // ...
    return true;
  }

}