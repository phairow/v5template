import { OpenAPIV3 } from 'openapi-types';

export class SchemaUtil {

  static isNumber(schema?: OpenAPIV3.SchemaObject): boolean {
    return !!schema && schema.type === 'number';
  }

  static isInteger(schema?: OpenAPIV3.SchemaObject):boolean {
    return !!schema && schema.type === 'integer';
  }

  static isArray(schema?: OpenAPIV3.SchemaObject):boolean {
    return !!schema && schema.type === 'array';
  }

  static isString(schema?: OpenAPIV3.SchemaObject):boolean {
    return !!schema && schema.type === 'string';
  }

  static isBoolean(schema?: OpenAPIV3.SchemaObject):boolean {
    return !!schema && schema.type === 'boolean';
  }

  static isObject(schema?: OpenAPIV3.SchemaObject):boolean {
    return !!schema && schema.type === 'object';
  }

  static schemaName(schema?: OpenAPIV3.SchemaObject):string {
    return SchemaUtil.isObject(schema) && !!schema && schema.title || 'unknown_schema';
  }

  static schemaType(schema?: OpenAPIV3.SchemaObject):string {
    
    if (SchemaUtil.isInteger(schema)) {
      return 'number';
    }

    if (!!schema && SchemaUtil.isArray(schema)) {
      let result = '[]';

      if('items' in schema) {
        if ('type' in schema.items) {
            result = schema.items.type + '[]';
        }
      }

      return result;
    }

    if (SchemaUtil.isString(schema)) {
      return 'string';
    }

    if (SchemaUtil.isBoolean(schema)) {
      return 'boolean';
    }

    if (SchemaUtil.isObject(schema)) {
      return SchemaUtil.schemaName(schema);
    }

    return 'unknown';
  }
}