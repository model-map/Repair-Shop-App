import { z } from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CustomersCountOrderByAggregateInputObjectSchema } from './CustomersCountOrderByAggregateInput.schema';
import { CustomersAvgOrderByAggregateInputObjectSchema } from './CustomersAvgOrderByAggregateInput.schema';
import { CustomersMaxOrderByAggregateInputObjectSchema } from './CustomersMaxOrderByAggregateInput.schema';
import { CustomersMinOrderByAggregateInputObjectSchema } from './CustomersMinOrderByAggregateInput.schema';
import { CustomersSumOrderByAggregateInputObjectSchema } from './CustomersSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  firstName: SortOrderSchema.optional(),
  lastName: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  phone: SortOrderSchema.optional(),
  address1: SortOrderSchema.optional(),
  address2: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  city: SortOrderSchema.optional(),
  state: SortOrderSchema.optional(),
  zip: SortOrderSchema.optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  active: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => CustomersCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => CustomersAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CustomersMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CustomersMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => CustomersSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const CustomersOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CustomersOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomersOrderByWithAggregationInput>;
export const CustomersOrderByWithAggregationInputObjectZodSchema = makeSchema();
