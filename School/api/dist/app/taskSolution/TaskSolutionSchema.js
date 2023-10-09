"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskSolStatusSchema = exports.updateTaskSolutionSchema = exports.submitTaskSolutionSchema = void 0;
const zod_1 = require("zod");
exports.submitTaskSolutionSchema = zod_1.z.object({
    ass_tsk_id: zod_1.z.number(),
    title: zod_1.z.string(),
    description: zod_1.z.string(),
    // text: z.string({ required_error: "comment text is required" }),
    // pdf: z.string(),
    // image: z.string(),
    // video: z.string(),
    // status: z.enum(["SUBMITED", "APPROVED", "REJECTED"]),
});
exports.updateTaskSolutionSchema = zod_1.z.object({
    ass_tsk_id: zod_1.z.number(),
    title: zod_1.z.string(),
    description: zod_1.z.string(),
    // pdf: z.string(),
    // image: z.string(),
    // video: z.string(),
    // status: z.enum(["SUBMITED", "APPROVED", "REJECTED"]),
});
exports.TaskSolStatusSchema = zod_1.z.object({
    status: zod_1.z.enum(["SUBMITED", "APPROVED", "REJECTED"]),
});
