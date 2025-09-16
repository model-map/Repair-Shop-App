import { z } from 'zod';
import type { Prisma } from '../../../../generated/prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  customerId: z.literal(true).optional()
}).strict();
export const TicketsAvgAggregateInputObjectSchema: z.ZodType<Prisma.TicketsAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TicketsAvgAggregateInputType>;
export const TicketsAvgAggregateInputObjectZodSchema = makeSchema();
