import { z } from "zod";

// creating a new School
export const createSChoolSchema = z.object({
  name: z.string(),
  address: z.string(),
  email: z.string().email(),
  password: z.string(),
});

export const updateSchoolSchema = z.object({
  name: z.string(),
  address: z.string(),
});
