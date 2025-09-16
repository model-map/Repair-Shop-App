import type { Prisma } from '../../../generated/prisma';
import { z } from 'zod';
import { CustomersIncludeObjectSchema } from './objects/CustomersInclude.schema';
import { CustomersOrderByWithRelationInputObjectSchema } from './objects/CustomersOrderByWithRelationInput.schema';
import { CustomersWhereInputObjectSchema } from './objects/CustomersWhereInput.schema';
import { CustomersWhereUniqueInputObjectSchema } from './objects/CustomersWhereUniqueInput.schema';
import { CustomersScalarFieldEnumSchema } from './enums/CustomersScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CustomersFindManySelectSchema: z.ZodType<Prisma.CustomersSelect> = z.object({
    id: z.boolean().optional(),
    firstName: z.boolean().optional(),
    lastName: z.boolean().optional(),
    email: z.boolean().optional(),
    phone: z.boolean().optional(),
    address1: z.boolean().optional(),
    address2: z.boolean().optional(),
    state: z.boolean().optional(),
    zip: z.boolean().optional(),
    notes: z.boolean().optional(),
    active: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    Tickets: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CustomersSelect>;

export const CustomersFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    firstName: z.boolean().optional(),
    lastName: z.boolean().optional(),
    email: z.boolean().optional(),
    phone: z.boolean().optional(),
    address1: z.boolean().optional(),
    address2: z.boolean().optional(),
    state: z.boolean().optional(),
    zip: z.boolean().optional(),
    notes: z.boolean().optional(),
    active: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    Tickets: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const CustomersFindManySchema: z.ZodType<Prisma.CustomersFindManyArgs> = z.object({ select: CustomersFindManySelectSchema.optional(), include: z.lazy(() => CustomersIncludeObjectSchema.optional()), orderBy: z.union([CustomersOrderByWithRelationInputObjectSchema, CustomersOrderByWithRelationInputObjectSchema.array()]).optional(), where: CustomersWhereInputObjectSchema.optional(), cursor: CustomersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CustomersScalarFieldEnumSchema, CustomersScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CustomersFindManyArgs>;

export const CustomersFindManyZodSchema = z.object({ select: CustomersFindManySelectSchema.optional(), include: z.lazy(() => CustomersIncludeObjectSchema.optional()), orderBy: z.union([CustomersOrderByWithRelationInputObjectSchema, CustomersOrderByWithRelationInputObjectSchema.array()]).optional(), where: CustomersWhereInputObjectSchema.optional(), cursor: CustomersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CustomersScalarFieldEnumSchema, CustomersScalarFieldEnumSchema.array()]).optional() }).strict();