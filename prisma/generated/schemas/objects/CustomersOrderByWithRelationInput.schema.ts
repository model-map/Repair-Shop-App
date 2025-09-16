import { z } from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TicketsOrderByRelationAggregateInputObjectSchema } from './TicketsOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  firstName: SortOrderSchema.optional(),
  lastName: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  phone: SortOrderSchema.optional(),
  address1: SortOrderSchema.optional(),
  address2: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  state: SortOrderSchema.optional(),
  zip: SortOrderSchema.optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  active: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  Tickets: z.lazy(() => TicketsOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const CustomersOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CustomersOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomersOrderByWithRelationInput>;
export const CustomersOrderByWithRelationInputObjectZodSchema = makeSchema();
