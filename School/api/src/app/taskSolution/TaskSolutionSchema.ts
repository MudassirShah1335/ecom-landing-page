import { z } from "zod";

export const submitTaskSolutionSchema = z.object({
  ass_tsk_id: z.number(),
  title: z.string(),
  description: z.string(),
  // text: z.string({ required_error: "comment text is required" }),
  // pdf: z.string(),
  // image: z.string(),
  // video: z.string(),
  // status: z.enum(["SUBMITED", "APPROVED", "REJECTED"]),
});

export const updateTaskSolutionSchema = z.object({
  ass_tsk_id: z.number(),
  title: z.string(),
  description: z.string(),
  // pdf: z.string(),
  // image: z.string(),
  // video: z.string(),
  // status: z.enum(["SUBMITED", "APPROVED", "REJECTED"]),
});

export const TaskSolStatusSchema = z.object({
  status: z.enum(["SUBMITED", "APPROVED", "REJECTED"]),
});
