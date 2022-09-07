import { SdkResponse } from "./SdkResponse";
import { SdkParameter } from "./SdkParameter";
export declare class SdkEndpoint {
    httpMethod: string;
    apiTitle: string;
    apiDescription: string;
    apiVersion: string;
    title: string;
    description: string;
    parameters: SdkParameter[];
    response: SdkResponse;
    errors: SdkResponse[];
    constructor(httpMethod: string, apiTitle: string, apiDescription: string, apiVersion: string, title: string, description: string, parameters: SdkParameter[], response: SdkResponse, errors: SdkResponse[]);
}
