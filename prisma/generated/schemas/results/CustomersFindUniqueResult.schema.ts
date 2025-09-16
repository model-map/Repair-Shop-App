import { z } from 'zod';
export const CustomersFindUniqueResultSchema = z.nullable(z.object({
  id: z.number().int(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  phone: z.string(),
  address1: z.string(),
  address2: z.string().optional(),
  state: z.string(),
  zip: z.string(),
  notes: z.string().optional(),
  active: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  Tickets: z.array(z.unknown())
}));