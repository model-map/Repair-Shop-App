import type { Prisma } from '../../../generated/prisma';
import { z } from 'zod';
import { CustomersSelectObjectSchema } from './objects/CustomersSelect.schema';
import { CustomersIncludeObjectSchema } from './objects/CustomersInclude.schema';
import { CustomersWhereUniqueInputObjectSchema } from './objects/CustomersWhereUniqueInput.schema';

export const CustomersFindUniqueSchema: z.ZodType<Prisma.CustomersFindUniqueArgs> = z.object({ select: CustomersSelectObjectSchema.optional(), include: CustomersIncludeObjectSchema.optional(), where: CustomersWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CustomersFindUniqueArgs>;

export const CustomersFindUniqueZodSchema = z.object({ select: CustomersSelectObjectSchema.optional(), include: CustomersIncludeObjectSchema.optional(), where: CustomersWhereUniqueInputObjectSchema }).strict();