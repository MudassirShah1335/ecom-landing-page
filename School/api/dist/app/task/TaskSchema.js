"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTaskSchema = exports.createTaskSchema = exports.createCustomTaskSchema = void 0;
const zod_1 = require("zod");
exports.createCustomTaskSchema = zod_1.z.object({
    title: zod_1.z.string(),
    description: zod_1.z.string(),
    school_id: zod_1.z.number(),
    class_id: zod_1.z.number(),
});
exports.createTaskSchema = zod_1.z.object({
    title: zod_1.z.string(),
    description: zod_1.z.string(),
    class_id: zod_1.z.number(),
});
exports.updateTaskSchema = zod_1.z.object({
    title: zod_1.z.string(),
    description: zod_1.z.string(),
});
