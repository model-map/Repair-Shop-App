import { z } from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { CustomersArgsObjectSchema } from './CustomersArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  description: z.boolean().optional(),
  completed: z.boolean().optional(),
  tech: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  customerId: z.boolean().optional(),
  customer: z.union([z.boolean(), z.lazy(() => CustomersArgsObjectSchema)]).optional()
}).strict();
export const TicketsSelectObjectSchema: z.ZodType<Prisma.TicketsSelect> = makeSchema() as unknown as z.ZodType<Prisma.TicketsSelect>;
export const TicketsSelectObjectZodSchema = makeSchema();
