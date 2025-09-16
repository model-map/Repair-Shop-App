import { z } from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  completed: SortOrderSchema.optional(),
  tech: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  customerId: SortOrderSchema.optional()
}).strict();
export const TicketsMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TicketsMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketsMinOrderByAggregateInput>;
export const TicketsMinOrderByAggregateInputObjectZodSchema = makeSchema();
