import { z } from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const ticketsscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => TicketsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TicketsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TicketsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TicketsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TicketsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  title: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(255)]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  completed: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  tech: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  customerId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const TicketsScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.TicketsScalarWhereWithAggregatesInput> = ticketsscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.TicketsScalarWhereWithAggregatesInput>;
export const TicketsScalarWhereWithAggregatesInputObjectZodSchema = ticketsscalarwherewithaggregatesinputSchema;
