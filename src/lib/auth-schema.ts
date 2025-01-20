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

  lastname: z
    .string()
    .nonempty({
      message: "Lastname is required",
    })
    .min(2, {
      message: "Lastname must be at least 2 characters long",
    })
    .max(50, {
      message: "Lastname cannot exceed 50 characters",
    }),
  phone: z
    .string()
    .nonempty({
      message: "Phone is required",
    })
    .min(2, {
      message: "Phone must be at least 2 characters long",
    })
    .max(50, {
      message: "Phone cannot exceed 50 characters",
    }),

  message: z
    .string()
    .nonempty({
      message: "Message is required",
    })
    .min(2, {
      message: "Message must be at least 2 characters long",
    })
    .max(50, {
      message: "Message cannot exceed 50 characters",
    }),

    role: z
    .string()
    .nonempty({
      message: "Role is required",
    })
    .min(2, {
      message: "Role must be at least 2 characters long",
    })
    .max(50, {
      message: "Role cannot exceed 50 characters",
    }),
});

export const signInFormSchema = formSchema.pick({
  email: true,
});

export const contactoFormSchema = formSchema.pick({
  name: true,
  lastname: true,
  phone: true,
  email: true,
  message: true,
});

export const signUpFormSchema = formSchema.pick({
  name: true,
  lastname: true,
  email: true,
  password: true,
  role: true,
});
