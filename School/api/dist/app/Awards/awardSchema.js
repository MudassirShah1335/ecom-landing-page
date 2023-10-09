"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.awardSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.awardSchema = zod_1.default.object({
    class_id: zod_1.default.number(),
    award: zod_1.default.string(),
    level: zod_1.default.string(),
});
