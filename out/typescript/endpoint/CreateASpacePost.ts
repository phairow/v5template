import { Logger } from "../../log/Logger";
import { Networking } from "../../net/Networking";
import { Parser } from "../../parse/Parser";

export class CreateASpacePost {
  private httpMethod: string = 'post';

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