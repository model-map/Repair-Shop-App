import type { Prisma } from '../../../generated/prisma';
import { z } from 'zod';
import { CustomersWhereInputObjectSchema } from './objects/CustomersWhereInput.schema';
import { CustomersOrderByWithAggregationInputObjectSchema } from './objects/CustomersOrderByWithAggregationInput.schema';
import { CustomersScalarWhereWithAggregatesInputObjectSchema } from './objects/CustomersScalarWhereWithAggregatesInput.schema';
import { CustomersScalarFieldEnumSchema } from './enums/CustomersScalarFieldEnum.schema';
import { CustomersCountAggregateInputObjectSchema } from './objects/CustomersCountAggregateInput.schema';
import { CustomersMinAggregateInputObjectSchema } from './objects/CustomersMinAggregateInput.schema';
import { CustomersMaxAggregateInputObjectSchema } from './objects/CustomersMaxAggregateInput.schema';
import { CustomersAvgAggregateInputObjectSchema } from './objects/CustomersAvgAggregateInput.schema';
import { CustomersSumAggregateInputObjectSchema } from './objects/CustomersSumAggregateInput.schema';

export const CustomersGroupBySchema: z.ZodType<Prisma.CustomersGroupByArgs> = z.object({ where: CustomersWhereInputObjectSchema.optional(), orderBy: z.union([CustomersOrderByWithAggregationInputObjectSchema, CustomersOrderByWithAggregationInputObjectSchema.array()]).optional(), having: CustomersScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(CustomersScalarFieldEnumSchema), _count: z.union([ z.literal(true), CustomersCountAggregateInputObjectSchema ]).optional(), _min: CustomersMinAggregateInputObjectSchema.optional(), _max: CustomersMaxAggregateInputObjectSchema.optional(), _avg: CustomersAvgAggregateInputObjectSchema.optional(), _sum: CustomersSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CustomersGroupByArgs>;

export const CustomersGroupByZodSchema = z.object({ where: CustomersWhereInputObjectSchema.optional(), orderBy: z.union([CustomersOrderByWithAggregationInputObjectSchema, CustomersOrderByWithAggregationInputObjectSchema.array()]).optional(), having: CustomersScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(CustomersScalarFieldEnumSchema), _count: z.union([ z.literal(true), CustomersCountAggregateInputObjectSchema ]).optional(), _min: CustomersMinAggregateInputObjectSchema.optional(), _max: CustomersMaxAggregateInputObjectSchema.optional(), _avg: CustomersAvgAggregateInputObjectSchema.optional(), _sum: CustomersSumAggregateInputObjectSchema.optional() }).strict();