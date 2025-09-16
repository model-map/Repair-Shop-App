import { z } from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { CustomersWhereInputObjectSchema } from './CustomersWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => CustomersWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => CustomersWhereInputObjectSchema).optional()
}).strict();
export const CustomersScalarRelationFilterObjectSchema: z.ZodType<Prisma.CustomersScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CustomersScalarRelationFilter>;
export const CustomersScalarRelationFilterObjectZodSchema = makeSchema();
