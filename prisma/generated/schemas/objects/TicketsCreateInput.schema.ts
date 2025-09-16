import { z } from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { CustomersCreateNestedOneWithoutTicketsInputObjectSchema } from './CustomersCreateNestedOneWithoutTicketsInput.schema'

const makeSchema = () => z.object({
  title: z.string().max(255),
  description: z.string().max(255).optional().nullable(),
  completed: z.boolean().optional(),
  tech: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  customer: z.lazy(() => CustomersCreateNestedOneWithoutTicketsInputObjectSchema)
}).strict();
export const TicketsCreateInputObjectSchema: z.ZodType<Prisma.TicketsCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketsCreateInput>;
export const TicketsCreateInputObjectZodSchema = makeSchema();
