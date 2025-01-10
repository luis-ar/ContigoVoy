import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .nonempty({
      message: "Name is required",
    })
    .min(2, {
      message: "Name must be at least 2 characters long",
    })
    .max(50, {
      message: "Name cannot exceed 50 characters",
    }),
  email: z
    .string()
    .nonempty({
      message: "Email is required",
    })
    .email({
      message: "Invalid email format",
    })
    .min(2, {
      message: "Email must be at least 2 characters long",
    })
    .max(50, {
      message: "Email cannot exceed 50 characters",
    }),
  password: z
    .string()
    .nonempty({
      message: "Password is required",
    })
    .min(8, {
      message: "Password must be at least 8 characters long",
    })
    .max(50, {
      message: "Password cannot exceed 50 characters",
    }),
});

export const signInFormSchema = formSchema.pick({
  email: true,
  password: true,
});
