import z from "zod";

export const registerRequest = z.object({
  body: z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().min(2, "Email must be at least 2 characters").email("Invalid email format"),
  }),
});