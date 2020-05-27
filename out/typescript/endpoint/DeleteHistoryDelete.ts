import { Logger } from "../../log/Logger";
import { Networking } from "../../net/Networking";
import { Parser } from "../../parse/Parser";

export class DeleteHistoryDelete {
  private httpMethod: string = 'delete';

  constructor(
    public net: Networking,
    public parse: Parser,
    public log: Logger,
  ) {}

  static validate(subKey: string, channels: string, start: unknown, end: unknown) {

    if (typeof (subKey) !== 'string') {
      return false;
    }

    if (typeof (channels) !== 'string') {
      return false;
    }

    if (typeof (start) !== 'number') {
      return false;
    }

    if (typeof (end) !== 'number') {
      return false;
    }

    return true;
  }

  static execute(subKey: string, channels: string, start: unknown, end: unknown) {
    // ...
  }

}