import { z } from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { CustomersScalarRelationFilterObjectSchema } from './CustomersScalarRelationFilter.schema';
import { CustomersWhereInputObjectSchema } from './CustomersWhereInput.schema'

const ticketswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TicketsWhereInputObjectSchema), z.lazy(() => TicketsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TicketsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TicketsWhereInputObjectSchema), z.lazy(() => TicketsWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  completed: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  tech: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  customerId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  customer: z.union([z.lazy(() => CustomersScalarRelationFilterObjectSchema), z.lazy(() => CustomersWhereInputObjectSchema)]).optional()
}).strict();
export const TicketsWhereInputObjectSchema: z.ZodType<Prisma.TicketsWhereInput> = ticketswhereinputSchema as unknown as z.ZodType<Prisma.TicketsWhereInput>;
export const TicketsWhereInputObjectZodSchema = ticketswhereinputSchema;
