import { z } from "zod";

export const signUpSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
});

export type TSignUpSchema = z.infer<typeof signUpSchema>;
