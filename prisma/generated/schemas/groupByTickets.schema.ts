import type { Prisma } from '../../../generated/prisma';
import { z } from 'zod';
import { TicketsWhereInputObjectSchema } from './objects/TicketsWhereInput.schema';
import { TicketsOrderByWithAggregationInputObjectSchema } from './objects/TicketsOrderByWithAggregationInput.schema';
import { TicketsScalarWhereWithAggregatesInputObjectSchema } from './objects/TicketsScalarWhereWithAggregatesInput.schema';
import { TicketsScalarFieldEnumSchema } from './enums/TicketsScalarFieldEnum.schema';
import { TicketsCountAggregateInputObjectSchema } from './objects/TicketsCountAggregateInput.schema';
import { TicketsMinAggregateInputObjectSchema } from './objects/TicketsMinAggregateInput.schema';
import { TicketsMaxAggregateInputObjectSchema } from './objects/TicketsMaxAggregateInput.schema';
import { TicketsAvgAggregateInputObjectSchema } from './objects/TicketsAvgAggregateInput.schema';
import { TicketsSumAggregateInputObjectSchema } from './objects/TicketsSumAggregateInput.schema';

export const TicketsGroupBySchema: z.ZodType<Prisma.TicketsGroupByArgs> = z.object({ where: TicketsWhereInputObjectSchema.optional(), orderBy: z.union([TicketsOrderByWithAggregationInputObjectSchema, TicketsOrderByWithAggregationInputObjectSchema.array()]).optional(), having: TicketsScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(TicketsScalarFieldEnumSchema), _count: z.union([ z.literal(true), TicketsCountAggregateInputObjectSchema ]).optional(), _min: TicketsMinAggregateInputObjectSchema.optional(), _max: TicketsMaxAggregateInputObjectSchema.optional(), _avg: TicketsAvgAggregateInputObjectSchema.optional(), _sum: TicketsSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TicketsGroupByArgs>;

export const TicketsGroupByZodSchema = z.object({ where: TicketsWhereInputObjectSchema.optional(), orderBy: z.union([TicketsOrderByWithAggregationInputObjectSchema, TicketsOrderByWithAggregationInputObjectSchema.array()]).optional(), having: TicketsScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(TicketsScalarFieldEnumSchema), _count: z.union([ z.literal(true), TicketsCountAggregateInputObjectSchema ]).optional(), _min: TicketsMinAggregateInputObjectSchema.optional(), _max: TicketsMaxAggregateInputObjectSchema.optional(), _avg: TicketsAvgAggregateInputObjectSchema.optional(), _sum: TicketsSumAggregateInputObjectSchema.optional() }).strict();