import { z } from "zod";

export const TicketsResultSchema = z
  .object({
    id: z.number().int(),
    customerId: z.number().int(),
    title: z.string(),
    description: z.string().nullable(),
    completed: z.boolean(),
    tech: z.string(),
  })
  .strict();

export type TicketsResultType = z.infer<typeof TicketsResultSchema>;
