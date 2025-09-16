import { z } from 'zod';
export const TicketsUpdateResultSchema = z.nullable(z.object({
  id: z.number().int(),
  title: z.string(),
  description: z.string().optional(),
  completed: z.boolean(),
  tech: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  customerId: z.number().int(),
  customer: z.unknown()
}));