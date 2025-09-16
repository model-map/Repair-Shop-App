import { z } from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { TicketsSelectObjectSchema } from './TicketsSelect.schema';
import { TicketsIncludeObjectSchema } from './TicketsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TicketsSelectObjectSchema).optional(),
  include: z.lazy(() => TicketsIncludeObjectSchema).optional()
}).strict();
export const TicketsArgsObjectSchema = makeSchema();
export const TicketsArgsObjectZodSchema = makeSchema();
