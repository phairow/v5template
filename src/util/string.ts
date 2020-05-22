import * as _ from 'underscore.string';

export class StringUtil {

  static lowerFirstChar(value: string): string {
    return value.substring(0,1).toLowerCase() + value.substring(1)
  }

  static stripPerens(value: string): string {
    return value.replace(/[\(\)]/g, '');
  }
}