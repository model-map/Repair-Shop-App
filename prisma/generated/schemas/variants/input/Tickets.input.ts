import { z } from "zod";

// prettier-ignore
export const TicketsInputSchema = z.object({
    id: z.union([z.number().int(),z.string()]),
    customerId: z.number().int(),
    title: z.string().min(1,"Title is required"),
    description: z.string().optional().nullable(),
    completed: z.boolean(),
    tech: z.string(),
}).strict();

export type TicketsInputType = z.infer<typeof TicketsInputSchema>;
