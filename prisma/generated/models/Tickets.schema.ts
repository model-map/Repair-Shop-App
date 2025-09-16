import { z } from 'zod';

export const TicketsSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  description: z.string().nullish(),
  completed: z.boolean(),
  tech: z.string().default("unassigned"),
  createdAt: z.date(),
  updatedAt: z.date(),
  customerId: z.number().int(),
});

export type TicketsType = z.infer<typeof TicketsSchema>;
