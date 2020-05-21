import { OpenAPIV3 } from 'openapi-types';

export class SdkParameter {
  constructor(
    public title: string,
    public name: string,
    public location: string,
    public description: string,
    public required: boolean,
    public schema: OpenAPIV3.SchemaObject
  ) {}

  isNumber(): boolean {
    return this.schema && this.schema.type === 'number';
  }

  isInteger(): boolean {
    return this.schema && this.schema.type === 'integer';
  }

  isArray(): boolean {
    return this.schema && this.schema.type === 'array';
  }

  isString(): boolean {
    return this.schema && this.schema.type === 'string';
  }

  isBoolean(): boolean {
    return this.schema && this.schema.type === 'boolean';
  }

  isObject(): boolean {
    return this.schema && this.schema.type === 'object';
  }

  schemaName(): string {
    return this.isObject() && this.schema && this.schema.title || 'unknown_schema';
  }

  schemaType(): string {
    if (this.isInteger()) {
      return 'number';
    }

    if (this.isArray()) {
      let result = '[]';

      if( 'items' in this.schema) {
        if ('type' in this.schema.items) {
            result = this.schema.items.type + '[]';
        }
      }

      return result;
    }

    if (this.isString()) {
      return 'string';
    }

    if (this.isBoolean()) {
      return 'boolean';
    }

    if (this.isObject()) {
      return this.schemaName();
    }

    return 'unknown';
  }
}