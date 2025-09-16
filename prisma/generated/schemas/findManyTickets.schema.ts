import type { Prisma } from '../../../generated/prisma';
import { z } from 'zod';
import { TicketsIncludeObjectSchema } from './objects/TicketsInclude.schema';
import { TicketsOrderByWithRelationInputObjectSchema } from './objects/TicketsOrderByWithRelationInput.schema';
import { TicketsWhereInputObjectSchema } from './objects/TicketsWhereInput.schema';
import { TicketsWhereUniqueInputObjectSchema } from './objects/TicketsWhereUniqueInput.schema';
import { TicketsScalarFieldEnumSchema } from './enums/TicketsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TicketsFindManySelectSchema: z.ZodType<Prisma.TicketsSelect> = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    completed: z.boolean().optional(),
    tech: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    customerId: z.boolean().optional(),
    customer: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TicketsSelect>;

export const TicketsFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    completed: z.boolean().optional(),
    tech: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    customerId: z.boolean().optional(),
    customer: z.boolean().optional()
  }).strict();

export const TicketsFindManySchema: z.ZodType<Prisma.TicketsFindManyArgs> = z.object({ select: TicketsFindManySelectSchema.optional(), include: z.lazy(() => TicketsIncludeObjectSchema.optional()), orderBy: z.union([TicketsOrderByWithRelationInputObjectSchema, TicketsOrderByWithRelationInputObjectSchema.array()]).optional(), where: TicketsWhereInputObjectSchema.optional(), cursor: TicketsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TicketsScalarFieldEnumSchema, TicketsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TicketsFindManyArgs>;

export const TicketsFindManyZodSchema = z.object({ select: TicketsFindManySelectSchema.optional(), include: z.lazy(() => TicketsIncludeObjectSchema.optional()), orderBy: z.union([TicketsOrderByWithRelationInputObjectSchema, TicketsOrderByWithRelationInputObjectSchema.array()]).optional(), where: TicketsWhereInputObjectSchema.optional(), cursor: TicketsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TicketsScalarFieldEnumSchema, TicketsScalarFieldEnumSchema.array()]).optional() }).strict();