import z from "zod";
export const awardSchema = z.object({
  class_id: z.number(),
  award: z.string(),
  level: z.string(),
});
