import { z } from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { TicketsListRelationFilterObjectSchema } from './TicketsListRelationFilter.schema'

const customerswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CustomersWhereInputObjectSchema), z.lazy(() => CustomersWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CustomersWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CustomersWhereInputObjectSchema), z.lazy(() => CustomersWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  firstName: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  lastName: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  phone: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(13)]).optional(),
  address1: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  address2: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  state: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(2)]).optional(),
  zip: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(6)]).optional(),
  notes: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  active: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  Tickets: z.lazy(() => TicketsListRelationFilterObjectSchema).optional()
}).strict();
export const CustomersWhereInputObjectSchema: z.ZodType<Prisma.CustomersWhereInput> = customerswhereinputSchema as unknown as z.ZodType<Prisma.CustomersWhereInput>;
export const CustomersWhereInputObjectZodSchema = customerswhereinputSchema;
