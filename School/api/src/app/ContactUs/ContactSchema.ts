import { z } from "zod";

// contact us
export const contactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string().min(10).max(150),
});
