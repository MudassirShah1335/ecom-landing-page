"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkMultipleFields = exports.checkValueExists = void 0;
const checkValueExists = (table, field, value) => __awaiter(void 0, void 0, void 0, function* () {
    const existingValue = yield table.findOne({ where: { [field]: value } });
    return existingValue !== null;
});
exports.checkValueExists = checkValueExists;
const checkMultipleFields = (table, field1, field2, value1, value2) => __awaiter(void 0, void 0, void 0, function* () {
    const existingValue = yield table.findOne({ where: { [field1]: value1, [field2]: value2 } });
    return existingValue !== null;
});
exports.checkMultipleFields = checkMultipleFields;
