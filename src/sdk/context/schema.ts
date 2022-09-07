import { OpenAPIV3 } from 'openapi-types';
import { StringUtil } from '../../util/string';

import {
  comma,
  comma_separated_list,
} from "../../util/mustache";
import * as _ from 'underscore.string';

export class SchemaTypescript {
  title: string;

  constructor(
    public jsonSchema: OpenAPIV3.SchemaObject
  ) {
    this.title = jsonSchema.title || 'missing title';
  }

  comma() {
    return comma();
  }

  comma_separated_list() {
    return comma_separated_list();
  }

}

export function schemaConvert(jsonSchema: OpenAPIV3.SchemaObject) {
  return new SchemaTypescript(
    jsonSchema
  );
}