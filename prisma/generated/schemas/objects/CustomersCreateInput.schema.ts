import { z } from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { TicketsCreateNestedManyWithoutCustomerInputObjectSchema } from './TicketsCreateNestedManyWithoutCustomerInput.schema'

const makeSchema = () => z.object({
  firstName: z.string().max(255),
  lastName: z.string().max(255),
  email: z.string().max(255),
  phone: z.string().max(13),
  address1: z.string().max(255),
  address2: z.string().max(255).optional().nullable(),
  city: z.string().max(255),
  state: z.string().max(2),
  zip: z.string().max(6),
  notes: z.string().optional().nullable(),
  active: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  Tickets: z.lazy(() => TicketsCreateNestedManyWithoutCustomerInputObjectSchema)
}).strict();
export const CustomersCreateInputObjectSchema: z.ZodType<Prisma.CustomersCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomersCreateInput>;
export const CustomersCreateInputObjectZodSchema = makeSchema();
