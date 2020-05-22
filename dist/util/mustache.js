"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comma = () => ', ';
exports.comma_separated_list = () => (text, render) => render(text).replace(/,\s$/, '');
