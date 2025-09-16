import { z } from 'zod';
import type { Prisma } from '../../../../generated/prisma';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  phone: z.string(),
  address1: z.string(),
  address2: z.string().optional().nullable(),
  state: z.string(),
  zip: z.string(),
  notes: z.string().optional().nullable(),
  active: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const CustomersUncheckedCreateWithoutTicketsInputObjectSchema: z.ZodType<Prisma.CustomersUncheckedCreateWithoutTicketsInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomersUncheckedCreateWithoutTicketsInput>;
export const CustomersUncheckedCreateWithoutTicketsInputObjectZodSchema = makeSchema();
