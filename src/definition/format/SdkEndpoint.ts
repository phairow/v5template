import { SdkResponse } from "./SdkResponse";
import { SdkParameter } from "./SdkParameter";

export class SdkEndpoint {
    constructor(
        public httpMethod: string,
        public apiTitle: string,
        public apiDescription: string,
        public apiVersion: string,
        public title: string,
        public description: string,
        public parameters: SdkParameter[],
        public response: SdkResponse,
        public errors: SdkResponse[],
    ) {}
}