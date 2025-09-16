import { z } from 'zod';
import type { Prisma } from '../../../../generated/prisma';


const makeSchema = () => z.object({
  title: z.string().max(255),
  description: z.string().max(255).optional().nullable(),
  completed: z.boolean().optional(),
  tech: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const TicketsCreateWithoutCustomerInputObjectSchema: z.ZodType<Prisma.TicketsCreateWithoutCustomerInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketsCreateWithoutCustomerInput>;
export const TicketsCreateWithoutCustomerInputObjectZodSchema = makeSchema();
