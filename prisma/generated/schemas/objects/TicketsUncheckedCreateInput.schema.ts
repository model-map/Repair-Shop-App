import { z } from 'zod';
import type { Prisma } from '../../../../generated/prisma';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  title: z.string().max(255),
  description: z.string().max(255).optional().nullable(),
  completed: z.boolean().optional(),
  tech: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  customerId: z.number().int()
}).strict();
export const TicketsUncheckedCreateInputObjectSchema: z.ZodType<Prisma.TicketsUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketsUncheckedCreateInput>;
export const TicketsUncheckedCreateInputObjectZodSchema = makeSchema();
