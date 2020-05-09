import { SdkEndpoint } from "./SdkEndpoint";
export declare class SdkApiDefinition {
    endpoints: SdkEndpoint[];
    schemas: object[];
    constructor(endpoints: SdkEndpoint[], schemas: object[]);
}
