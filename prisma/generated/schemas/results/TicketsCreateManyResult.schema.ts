import { z } from 'zod';
export const TicketsCreateManyResultSchema = z.object({
  count: z.number()
});