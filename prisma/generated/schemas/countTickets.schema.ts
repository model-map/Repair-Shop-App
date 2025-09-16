import type { Prisma } from '../../../generated/prisma';
import { z } from 'zod';
import { TicketsOrderByWithRelationInputObjectSchema } from './objects/TicketsOrderByWithRelationInput.schema';
import { TicketsWhereInputObjectSchema } from './objects/TicketsWhereInput.schema';
import { TicketsWhereUniqueInputObjectSchema } from './objects/TicketsWhereUniqueInput.schema';
import { TicketsCountAggregateInputObjectSchema } from './objects/TicketsCountAggregateInput.schema';

export const TicketsCountSchema: z.ZodType<Prisma.TicketsCountArgs> = z.object({ orderBy: z.union([TicketsOrderByWithRelationInputObjectSchema, TicketsOrderByWithRelationInputObjectSchema.array()]).optional(), where: TicketsWhereInputObjectSchema.optional(), cursor: TicketsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TicketsCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.TicketsCountArgs>;

export const TicketsCountZodSchema = z.object({ orderBy: z.union([TicketsOrderByWithRelationInputObjectSchema, TicketsOrderByWithRelationInputObjectSchema.array()]).optional(), where: TicketsWhereInputObjectSchema.optional(), cursor: TicketsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TicketsCountAggregateInputObjectSchema ]).optional() }).strict();