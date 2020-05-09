import { SdkEndpoint } from "./SdkEndpoint";

export class SdkApiDefinition {
  constructor(
    public endpoints: SdkEndpoint[],
    public schemas: object[],
  ) {};
}