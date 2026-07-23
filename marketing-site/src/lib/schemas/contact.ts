import { z } from "zod";

export const STORE_COUNT_OPTIONS = ["1", "2-5", "6+"] as const;

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name"),
  email: z.email("Enter a valid work email"),
  phone: z.string().trim().optional(),
  businessName: z.string().trim().min(2, "Enter your business or store name"),
  storeCount: z.enum(STORE_COUNT_OPTIONS, {
    error: "Select how many stores you run",
  }),
  plan: z.string().trim().min(1, "Select a plan"),
  message: z.string().trim().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
