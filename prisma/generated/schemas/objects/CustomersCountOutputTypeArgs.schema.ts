import { z } from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { CustomersCountOutputTypeSelectObjectSchema } from './CustomersCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CustomersCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const CustomersCountOutputTypeArgsObjectSchema = makeSchema();
export const CustomersCountOutputTypeArgsObjectZodSchema = makeSchema();
