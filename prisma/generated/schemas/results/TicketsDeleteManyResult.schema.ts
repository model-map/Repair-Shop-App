import { z } from 'zod';
export const TicketsDeleteManyResultSchema = z.object({
  count: z.number()
});