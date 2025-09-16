import { z } from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const CustomersSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CustomersSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomersSumOrderByAggregateInput>;
export const CustomersSumOrderByAggregateInputObjectZodSchema = makeSchema();
