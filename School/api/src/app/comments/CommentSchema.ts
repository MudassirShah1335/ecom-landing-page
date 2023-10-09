import { z } from "zod";

export const commentSchema = z.object({
  text: z.string(),
  task_sol_id: z.number()
});
