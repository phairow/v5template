"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StringUtil {
    static lowerFirstChar(value) {
        return value.substring(0, 1).toLowerCase() + value.substring(1);
    }
    static stripPerens(value) {
        return value.replace(/[\(\)]/g, '');
    }
}
exports.StringUtil = StringUtil;
