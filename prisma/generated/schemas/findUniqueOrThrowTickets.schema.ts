import type { Prisma } from '../../../generated/prisma';
import { z } from 'zod';
import { TicketsSelectObjectSchema } from './objects/TicketsSelect.schema';
import { TicketsIncludeObjectSchema } from './objects/TicketsInclude.schema';
import { TicketsWhereUniqueInputObjectSchema } from './objects/TicketsWhereUniqueInput.schema';

export const TicketsFindUniqueOrThrowSchema: z.ZodType<Prisma.TicketsFindUniqueOrThrowArgs> = z.object({ select: TicketsSelectObjectSchema.optional(), include: TicketsIncludeObjectSchema.optional(), where: TicketsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TicketsFindUniqueOrThrowArgs>;

export const TicketsFindUniqueOrThrowZodSchema = z.object({ select: TicketsSelectObjectSchema.optional(), include: TicketsIncludeObjectSchema.optional(), where: TicketsWhereUniqueInputObjectSchema }).strict();