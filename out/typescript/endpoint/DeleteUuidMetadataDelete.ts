import {
  Logger,
  Parser,
  Networking,
  TokenManager,
} from "pubnub-core";

export class DeleteUuidMetadataDelete {
  private httpMethod: string = 'delete';

  constructor(
    public net: Networking,
    public parse: Parser,
    public log: Logger,
    public token: TokenManager,
  ) {}

  static validate(): boolean {

    return true;
  }

  static execute(): boolean {
    // ...
    return true;
  }

}