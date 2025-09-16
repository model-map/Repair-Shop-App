import type { Prisma } from '../../../generated/prisma';
import { z } from 'zod';
import { CustomersOrderByWithRelationInputObjectSchema } from './objects/CustomersOrderByWithRelationInput.schema';
import { CustomersWhereInputObjectSchema } from './objects/CustomersWhereInput.schema';
import { CustomersWhereUniqueInputObjectSchema } from './objects/CustomersWhereUniqueInput.schema';
import { CustomersCountAggregateInputObjectSchema } from './objects/CustomersCountAggregateInput.schema';

export const CustomersCountSchema: z.ZodType<Prisma.CustomersCountArgs> = z.object({ orderBy: z.union([CustomersOrderByWithRelationInputObjectSchema, CustomersOrderByWithRelationInputObjectSchema.array()]).optional(), where: CustomersWhereInputObjectSchema.optional(), cursor: CustomersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CustomersCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.CustomersCountArgs>;

export const CustomersCountZodSchema = z.object({ orderBy: z.union([CustomersOrderByWithRelationInputObjectSchema, CustomersOrderByWithRelationInputObjectSchema.array()]).optional(), where: CustomersWhereInputObjectSchema.optional(), cursor: CustomersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CustomersCountAggregateInputObjectSchema ]).optional() }).strict();