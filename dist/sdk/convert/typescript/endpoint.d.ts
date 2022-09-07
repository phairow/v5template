import { SdkEndpoint } from "../../../definition/format/SdkEndpoint";
export declare class EndpointTypescript extends SdkEndpoint {
    titlePropertyName: string;
    constructor(endpoint: SdkEndpoint, titlePropertyName: string);
    comma(): string;
    comma_separated_list(): (text: string, render: Function) => string;
    paramTypes(): string[];
}
export declare function endpointConvert(endpoint: SdkEndpoint): EndpointTypescript;
