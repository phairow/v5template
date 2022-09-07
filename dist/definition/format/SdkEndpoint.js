"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SdkEndpoint {
    constructor(httpMethod, apiTitle, apiDescription, apiVersion, title, description, parameters, response, errors) {
        this.httpMethod = httpMethod;
        this.apiTitle = apiTitle;
        this.apiDescription = apiDescription;
        this.apiVersion = apiVersion;
        this.title = title;
        this.description = description;
        this.parameters = parameters;
        this.response = response;
        this.errors = errors;
    }
}
exports.SdkEndpoint = SdkEndpoint;
