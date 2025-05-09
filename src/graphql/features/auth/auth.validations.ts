import { z } from "zod";

export const AuthInputValidation = z.object({
  email: z
    .string()
    .email(),
  password: z
    .string()
})