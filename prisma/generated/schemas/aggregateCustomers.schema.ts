import type { Prisma } from '../../../generated/prisma';
import { z } from 'zod';
import { CustomersOrderByWithRelationInputObjectSchema } from './objects/CustomersOrderByWithRelationInput.schema';
import { CustomersWhereInputObjectSchema } from './objects/CustomersWhereInput.schema';
import { CustomersWhereUniqueInputObjectSchema } from './objects/CustomersWhereUniqueInput.schema';
import { CustomersCountAggregateInputObjectSchema } from './objects/CustomersCountAggregateInput.schema';
import { CustomersMinAggregateInputObjectSchema } from './objects/CustomersMinAggregateInput.schema';
import { CustomersMaxAggregateInputObjectSchema } from './objects/CustomersMaxAggregateInput.schema';
import { CustomersAvgAggregateInputObjectSchema } from './objects/CustomersAvgAggregateInput.schema';
import { CustomersSumAggregateInputObjectSchema } from './objects/CustomersSumAggregateInput.schema';

export const CustomersAggregateSchema: z.ZodType<Prisma.CustomersAggregateArgs> = z.object({ orderBy: z.union([CustomersOrderByWithRelationInputObjectSchema, CustomersOrderByWithRelationInputObjectSchema.array()]).optional(), where: CustomersWhereInputObjectSchema.optional(), cursor: CustomersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), CustomersCountAggregateInputObjectSchema ]).optional(), _min: CustomersMinAggregateInputObjectSchema.optional(), _max: CustomersMaxAggregateInputObjectSchema.optional(), _avg: CustomersAvgAggregateInputObjectSchema.optional(), _sum: CustomersSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CustomersAggregateArgs>;

export const CustomersAggregateZodSchema = z.object({ orderBy: z.union([CustomersOrderByWithRelationInputObjectSchema, CustomersOrderByWithRelationInputObjectSchema.array()]).optional(), where: CustomersWhereInputObjectSchema.optional(), cursor: CustomersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), CustomersCountAggregateInputObjectSchema ]).optional(), _min: CustomersMinAggregateInputObjectSchema.optional(), _max: CustomersMaxAggregateInputObjectSchema.optional(), _avg: CustomersAvgAggregateInputObjectSchema.optional(), _sum: CustomersSumAggregateInputObjectSchema.optional() }).strict();