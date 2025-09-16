import { z } from 'zod';
import type { Prisma } from '../../../../generated/prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const CustomersSumAggregateInputObjectSchema: z.ZodType<Prisma.CustomersSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CustomersSumAggregateInputType>;
export const CustomersSumAggregateInputObjectZodSchema = makeSchema();
