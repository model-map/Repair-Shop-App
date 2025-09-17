import { z } from "zod";

export const CustomersInputSchema = z
  .object({
    id: z.number().int(),
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.email("Invalid email"),
    phone: z
      .string()
      .regex(
        /^\d{4}-\d{3}-\d{3}$/,
        "Phone number should be in the format XXXX-XXX-XXX"
      ),
    address1: z.string().min(1, "Address is required"),
    address2: z.string().optional().nullable(),
    city: z.string().min(1, "City is required"),
    state: z.string().min(1, "State is required"),
    zip: z.string().regex(/^\d{6}$/, "Zip code should be in the format XXXXXX"),
    notes: z.string().optional().nullable(),
    active: z.boolean(),
  })
  .strict();

export type CustomersInputType = z.infer<typeof CustomersInputSchema>;
