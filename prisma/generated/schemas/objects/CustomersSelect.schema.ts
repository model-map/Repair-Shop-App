import { z } from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { TicketsFindManySchema } from '../findManyTickets.schema';
import { CustomersCountOutputTypeArgsObjectSchema } from './CustomersCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  firstName: z.boolean().optional(),
  lastName: z.boolean().optional(),
  email: z.boolean().optional(),
  phone: z.boolean().optional(),
  address1: z.boolean().optional(),
  address2: z.boolean().optional(),
  state: z.boolean().optional(),
  zip: z.boolean().optional(),
  notes: z.boolean().optional(),
  active: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  Tickets: z.union([z.boolean(), z.lazy(() => TicketsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CustomersCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CustomersSelectObjectSchema: z.ZodType<Prisma.CustomersSelect> = makeSchema() as unknown as z.ZodType<Prisma.CustomersSelect>;
export const CustomersSelectObjectZodSchema = makeSchema();
