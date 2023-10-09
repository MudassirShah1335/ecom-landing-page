import z from "zod";

export const assignTaskSchema = z.object({
  class_id: z.number(),
  task_id: z.number(),
  school_id: z.number(),
  description: z.string().optional(),
});
