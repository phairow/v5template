export class SdkResponse {
    constructor(
        public status: number,
        public description: string,
        public contentType: string,
        public schema: object,
    ) {}
}
