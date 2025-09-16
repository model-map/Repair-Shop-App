import { z } from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const TicketsOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.TicketsOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketsOrderByRelationAggregateInput>;
export const TicketsOrderByRelationAggregateInputObjectZodSchema = makeSchema();
