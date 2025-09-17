import { z } from 'zod';

// prettier-ignore
export const CustomersModelSchema = z.object({
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
    createdAt: z.date(),
    updatedAt: z.date(),
    Tickets: z.array(z.unknown())
}).strict();

export type CustomersModelType = z.infer<typeof CustomersModelSchema>;
