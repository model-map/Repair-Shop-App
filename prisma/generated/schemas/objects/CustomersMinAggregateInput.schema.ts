import { z } from 'zod';
import type { Prisma } from '../../../../generated/prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  firstName: z.literal(true).optional(),
  lastName: z.literal(true).optional(),
  email: z.literal(true).optional(),
  phone: z.literal(true).optional(),
  address1: z.literal(true).optional(),
  address2: z.literal(true).optional(),
  city: z.literal(true).optional(),
  state: z.literal(true).optional(),
  zip: z.literal(true).optional(),
  notes: z.literal(true).optional(),
  active: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const CustomersMinAggregateInputObjectSchema: z.ZodType<Prisma.CustomersMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CustomersMinAggregateInputType>;
export const CustomersMinAggregateInputObjectZodSchema = makeSchema();
