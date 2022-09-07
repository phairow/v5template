import { SdkEndpoint } from "../../../definition/format/SdkEndpoint";
export declare function endpointConvert(endpoint: SdkEndpoint): {
    titlePropertyName: string;
    httpMethod: string;
    apiTitle: string;
    apiDescription: string;
    apiVersion: string;
    title: string;
    description: string;
    parameters: import("../../../definition/format/SdkParameter").SdkParameter[];
    response: import("../../../definition/format/SdkResponse").SdkResponse;
    errors: import("../../../definition/format/SdkResponse").SdkResponse[];
};
