import { z } from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { CustomersSelectObjectSchema } from './CustomersSelect.schema';
import { CustomersIncludeObjectSchema } from './CustomersInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CustomersSelectObjectSchema).optional(),
  include: z.lazy(() => CustomersIncludeObjectSchema).optional()
}).strict();
export const CustomersArgsObjectSchema = makeSchema();
export const CustomersArgsObjectZodSchema = makeSchema();
