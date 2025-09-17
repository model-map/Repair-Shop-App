import { z } from "zod";

// prettier-ignore
export const CustomersResultSchema = z.object({
    id: z.number().int(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    phone: z.string(),
    address1: z.string(),
    address2: z.string().nullable(),
    city: z.string(),
    state: z.string(),
    zip: z.string(),
    notes: z.string().nullable(),
    active: z.boolean(),
}).strict();

export type CustomersResultType = z.infer<typeof CustomersResultSchema>;
