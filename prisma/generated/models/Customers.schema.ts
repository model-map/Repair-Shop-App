import { z } from 'zod';

export const CustomersSchema = z.object({
  id: z.number().int(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  phone: z.string(),
  address1: z.string(),
  address2: z.string().nullish(),
  city: z.string(),
  state: z.string(),
  zip: z.string(),
  notes: z.string().nullish(),
  active: z.boolean().default(true),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type CustomersType = z.infer<typeof CustomersSchema>;
