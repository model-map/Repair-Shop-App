import { z } from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { CustomersArgsObjectSchema } from './CustomersArgs.schema'

const makeSchema = () => z.object({
  customer: z.union([z.boolean(), z.lazy(() => CustomersArgsObjectSchema)]).optional()
}).strict();
export const TicketsIncludeObjectSchema: z.ZodType<Prisma.TicketsInclude> = makeSchema() as unknown as z.ZodType<Prisma.TicketsInclude>;
export const TicketsIncludeObjectZodSchema = makeSchema();
