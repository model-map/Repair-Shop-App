import { z } from "zod";

// prettier-ignore
export const TicketsResultSchema = z.object({
    id: z.number().int(),
    customerId: z.number().int(),
    title: z.string(),
    description: z.string().nullable(),
    completed: z.boolean(),
    tech: z.string(),
    // createdAt: z.date(),
    // updatedAt: z.date(),
    // customer: z.unknown()
}).strict();

export type TicketsResultType = z.infer<typeof TicketsResultSchema>;
