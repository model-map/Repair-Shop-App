import { z } from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { TicketsFindManySchema } from '../findManyTickets.schema';
import { CustomersCountOutputTypeArgsObjectSchema } from './CustomersCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  Tickets: z.union([z.boolean(), z.lazy(() => TicketsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CustomersCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CustomersIncludeObjectSchema: z.ZodType<Prisma.CustomersInclude> = makeSchema() as unknown as z.ZodType<Prisma.CustomersInclude>;
export const CustomersIncludeObjectZodSchema = makeSchema();
