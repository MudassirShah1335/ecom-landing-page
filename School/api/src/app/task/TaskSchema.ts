import { z } from "zod";

export const createCustomTaskSchema = z.object({
  title: z.string(),
  description: z.string(),
  school_id: z.number(),
  class_id: z.number(),
});

export const createTaskSchema = z.object({
  title: z.string(),
  description: z.string(),
  class_id: z.number(),
});

export const updateTaskSchema = z.object({
  title: z.string(),
  description: z.string(),
});
