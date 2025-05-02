import { z } from "zod";

export const userIdValidation = z.object({
  id: z.string().uuid()
})

export const userInputValidation = z.object({
  firstname: z
    .string()
    .min(2, { message: "First name is too short (minimum 2 characters)" })
    .max(50, { message: "First name is too long (maximum 50 characters)" }),
  lastname: z
    .string()
    .min(2, { message: "Last name is too short (minimum 2 characters)" })
    .max(50, { message: "Last name is too long (maximum 50 characters)" }),
  email: z
    .string()
    .email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .refine(
      (val) => {
        const upper = /[A-Z]/.test(val);
        const lower = /[a-z]/.test(val);
        const number = /\d/.test(val);
        const special = /[`~!@#$%^&*()_+\-={}[\]|;:"<>,.?/]/.test(val);
        return upper && lower && number && special;
      },
      {
        message:
          "Password must contain: 1 uppercase, 1 lowercase, 1 number, and 1 special character",
      }),
  role: z
    .enum(['ADMIN', 'MANAGEMENT', 'PROCESSING', 'RECRUITMENT'], 
      {
        invalid_type_error: "Invalid role type.  Please select from ADMIN, MANAGEMENT, PROCESSING, or RECRUITMENT.",
        required_error: "Role is required."
      }), 
})