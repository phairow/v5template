import { OpenAPIV3 } from 'openapi-types';
import { SchemaUtil } from '../../util/schema';

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
    return SchemaUtil.isNumber(this.schema);
  }

  isInteger(): boolean {
    return SchemaUtil.isInteger(this.schema);
  }

  isArray(): boolean {
    return SchemaUtil.isArray(this.schema);
  }

  isString(): boolean {
    return SchemaUtil.isString(this.schema);
  }

  isBoolean(): boolean {
    return SchemaUtil.isBoolean(this.schema);
  }

  isObject(): boolean {
    return SchemaUtil.isObject(this.schema);
  }

  schemaName(): string {
    return SchemaUtil.schemaName(this.schema);
  }

  schemaType(): string {
    return SchemaUtil.schemaType(this.schema);
  }
}