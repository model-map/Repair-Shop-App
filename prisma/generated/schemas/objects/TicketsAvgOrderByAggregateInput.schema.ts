import { z } from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  customerId: SortOrderSchema.optional()
}).strict();
export const TicketsAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TicketsAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketsAvgOrderByAggregateInput>;
export const TicketsAvgOrderByAggregateInputObjectZodSchema = makeSchema();
