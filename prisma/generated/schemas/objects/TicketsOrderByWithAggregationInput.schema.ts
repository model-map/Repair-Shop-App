import { z } from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TicketsCountOrderByAggregateInputObjectSchema } from './TicketsCountOrderByAggregateInput.schema';
import { TicketsAvgOrderByAggregateInputObjectSchema } from './TicketsAvgOrderByAggregateInput.schema';
import { TicketsMaxOrderByAggregateInputObjectSchema } from './TicketsMaxOrderByAggregateInput.schema';
import { TicketsMinOrderByAggregateInputObjectSchema } from './TicketsMinOrderByAggregateInput.schema';
import { TicketsSumOrderByAggregateInputObjectSchema } from './TicketsSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  completed: SortOrderSchema.optional(),
  tech: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  customerId: SortOrderSchema.optional(),
  _count: z.lazy(() => TicketsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => TicketsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TicketsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TicketsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => TicketsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TicketsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TicketsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketsOrderByWithAggregationInput>;
export const TicketsOrderByWithAggregationInputObjectZodSchema = makeSchema();
