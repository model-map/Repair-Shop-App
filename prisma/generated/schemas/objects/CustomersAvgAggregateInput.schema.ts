import { z } from 'zod';
import type { Prisma } from '../../../../generated/prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const CustomersAvgAggregateInputObjectSchema: z.ZodType<Prisma.CustomersAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CustomersAvgAggregateInputType>;
export const CustomersAvgAggregateInputObjectZodSchema = makeSchema();
