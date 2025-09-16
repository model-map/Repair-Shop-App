import { z } from "zod";

export const CustomersInputSchema = z
  .object({
    id: z.number().int(),
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.email("Invalid email address"),
    phone: z
      .string()
      .regex(
        /^\d{3}-d{3}-d{4}$/,
        "Invalid phone number format. Use XXX-XXX-XXXX"
      ),
    address1: z.string().min(1, "Address is required"),
    address2: z.string().nullish(),
    state: z
      .string()
      .length(
        2,
        "State must be exactly 2 characters. Check yours here - https://en.wikipedia.org/wiki/ISO_3166-2:IN"
      ),
    zip: z.string().regex(/^\d{6}$/, "Invalid zip code."),
    notes: z.string().nullish(),
    // active: z.boolean().default(true),
    // createdAt: z.date(),
    // updatedAt: z.date(),
    // Tickets: z.array(z.unknown()),
  })
  .strict();

export type CustomersInputType = z.infer<typeof CustomersInputSchema>;
