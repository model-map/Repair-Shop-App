import { z } from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CustomersOrderByWithRelationInputObjectSchema } from './CustomersOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  completed: SortOrderSchema.optional(),
  tech: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  customerId: SortOrderSchema.optional(),
  customer: z.lazy(() => CustomersOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const TicketsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TicketsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketsOrderByWithRelationInput>;
export const TicketsOrderByWithRelationInputObjectZodSchema = makeSchema();
