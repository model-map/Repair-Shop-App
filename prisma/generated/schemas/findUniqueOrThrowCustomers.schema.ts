import type { Prisma } from '../../../generated/prisma';
import { z } from 'zod';
import { CustomersSelectObjectSchema } from './objects/CustomersSelect.schema';
import { CustomersIncludeObjectSchema } from './objects/CustomersInclude.schema';
import { CustomersWhereUniqueInputObjectSchema } from './objects/CustomersWhereUniqueInput.schema';

export const CustomersFindUniqueOrThrowSchema: z.ZodType<Prisma.CustomersFindUniqueOrThrowArgs> = z.object({ select: CustomersSelectObjectSchema.optional(), include: CustomersIncludeObjectSchema.optional(), where: CustomersWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CustomersFindUniqueOrThrowArgs>;

export const CustomersFindUniqueOrThrowZodSchema = z.object({ select: CustomersSelectObjectSchema.optional(), include: CustomersIncludeObjectSchema.optional(), where: CustomersWhereUniqueInputObjectSchema }).strict();