import { z } from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const CustomersAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CustomersAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomersAvgOrderByAggregateInput>;
export const CustomersAvgOrderByAggregateInputObjectZodSchema = makeSchema();
