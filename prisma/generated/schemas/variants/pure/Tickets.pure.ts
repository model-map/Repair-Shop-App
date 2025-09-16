import { z } from 'zod';

// prettier-ignore
export const TicketsModelSchema = z.object({
    id: z.number().int(),
    title: z.string(),
    description: z.string().nullable(),
    completed: z.boolean(),
    tech: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    customerId: z.number().int(),
    customer: z.unknown()
}).strict();

export type TicketsModelType = z.infer<typeof TicketsModelSchema>;
