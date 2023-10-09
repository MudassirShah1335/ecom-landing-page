"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignTaskSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.assignTaskSchema = zod_1.default.object({
    class_id: zod_1.default.number(),
    task_id: zod_1.default.number(),
    school_id: zod_1.default.number(),
    description: zod_1.default.string().optional(),
});
