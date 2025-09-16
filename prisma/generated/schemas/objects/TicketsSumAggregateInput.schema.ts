import { z } from 'zod';
import type { Prisma } from '../../../../generated/prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  customerId: z.literal(true).optional()
}).strict();
export const TicketsSumAggregateInputObjectSchema: z.ZodType<Prisma.TicketsSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TicketsSumAggregateInputType>;
export const TicketsSumAggregateInputObjectZodSchema = makeSchema();
