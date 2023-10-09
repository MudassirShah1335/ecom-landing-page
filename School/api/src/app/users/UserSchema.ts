import { z } from "zod";

// creating a new School
export const createUserSchema = z.object({
  // school_id: z.number(),
  // teacher_id: z.number(),
  // role_id: z.number(),
  name: z.string(),
  mobile_no: z.string(),
  email: z.string().email(),
  academic_year: z.date(),
  password: z.string(),
});
