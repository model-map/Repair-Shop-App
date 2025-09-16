import { z } from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { TicketsWhereInputObjectSchema } from './TicketsWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => TicketsWhereInputObjectSchema).optional(),
  some: z.lazy(() => TicketsWhereInputObjectSchema).optional(),
  none: z.lazy(() => TicketsWhereInputObjectSchema).optional()
}).strict();
export const TicketsListRelationFilterObjectSchema: z.ZodType<Prisma.TicketsListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TicketsListRelationFilter>;
export const TicketsListRelationFilterObjectZodSchema = makeSchema();
