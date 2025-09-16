import { z } from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const ticketsscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TicketsScalarWhereInputObjectSchema), z.lazy(() => TicketsScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TicketsScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TicketsScalarWhereInputObjectSchema), z.lazy(() => TicketsScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  completed: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  tech: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  customerId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const TicketsScalarWhereInputObjectSchema: z.ZodType<Prisma.TicketsScalarWhereInput> = ticketsscalarwhereinputSchema as unknown as z.ZodType<Prisma.TicketsScalarWhereInput>;
export const TicketsScalarWhereInputObjectZodSchema = ticketsscalarwhereinputSchema;
