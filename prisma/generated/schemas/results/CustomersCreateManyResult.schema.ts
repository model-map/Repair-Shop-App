import { z } from 'zod';
export const CustomersCreateManyResultSchema = z.object({
  count: z.number()
});