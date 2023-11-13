import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(20, "Name must be less than 20 characters"),
  email: z.string().email("Invalid email"),
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(50, "Subject must be less than 50 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must be less than 500 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
