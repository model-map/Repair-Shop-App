import { z } from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  customerId: SortOrderSchema.optional()
}).strict();
export const TicketsSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TicketsSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketsSumOrderByAggregateInput>;
export const TicketsSumOrderByAggregateInputObjectZodSchema = makeSchema();
