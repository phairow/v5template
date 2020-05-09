export class SdkParameter {
    constructor(
        public name: string,
        public location: string,
        public description: string,
        public required: boolean,
        public schema: object
    ) {}
}