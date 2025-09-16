import { z } from 'zod';
import type { Prisma } from '../../../../generated/prisma';


const makeSchema = () => z.object({
  Tickets: z.boolean().optional()
}).strict();
export const CustomersCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.CustomersCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.CustomersCountOutputTypeSelect>;
export const CustomersCountOutputTypeSelectObjectZodSchema = makeSchema();
