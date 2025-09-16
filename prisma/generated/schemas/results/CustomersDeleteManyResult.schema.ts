import { z } from 'zod';
export const CustomersDeleteManyResultSchema = z.object({
  count: z.number()
});