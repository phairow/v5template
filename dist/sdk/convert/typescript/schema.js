"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mustache_1 = require("../../../util/mustache");
class SchemaTypescript {
    constructor(jsonSchema) {
        this.jsonSchema = jsonSchema;
        this.title = jsonSchema.title || 'missing title';
    }
    comma() {
        return mustache_1.comma();
    }
    comma_separated_list() {
        return mustache_1.comma_separated_list();
    }
}
exports.SchemaTypescript = SchemaTypescript;
function schemaConvert(jsonSchema) {
    return new SchemaTypescript(jsonSchema);
}
exports.schemaConvert = schemaConvert;
