import { z } from 'zod';
import type { Prisma } from '../../../../generated/prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  title: z.literal(true).optional(),
  description: z.literal(true).optional(),
  completed: z.literal(true).optional(),
  tech: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  customerId: z.literal(true).optional()
}).strict();
export const TicketsMinAggregateInputObjectSchema: z.ZodType<Prisma.TicketsMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TicketsMinAggregateInputType>;
export const TicketsMinAggregateInputObjectZodSchema = makeSchema();
