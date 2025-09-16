import { z } from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { TicketsUncheckedCreateNestedManyWithoutCustomerInputObjectSchema } from './TicketsUncheckedCreateNestedManyWithoutCustomerInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  firstName: z.string().max(255),
  lastName: z.string().max(255),
  email: z.string().max(255),
  phone: z.string().max(13),
  address1: z.string().max(255),
  address2: z.string().max(255).optional().nullable(),
  state: z.string().max(2),
  zip: z.string().max(6),
  notes: z.string().optional().nullable(),
  active: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  Tickets: z.lazy(() => TicketsUncheckedCreateNestedManyWithoutCustomerInputObjectSchema)
}).strict();
export const CustomersUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CustomersUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomersUncheckedCreateInput>;
export const CustomersUncheckedCreateInputObjectZodSchema = makeSchema();
