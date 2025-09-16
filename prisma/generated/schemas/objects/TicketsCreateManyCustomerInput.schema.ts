import { z } from 'zod';
import type { Prisma } from '../../../../generated/prisma';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  completed: z.boolean().optional(),
  tech: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const TicketsCreateManyCustomerInputObjectSchema: z.ZodType<Prisma.TicketsCreateManyCustomerInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketsCreateManyCustomerInput>;
export const TicketsCreateManyCustomerInputObjectZodSchema = makeSchema();
