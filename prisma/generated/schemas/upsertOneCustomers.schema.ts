import { z } from 'zod';
import { CustomersSelectObjectSchema } from './objects/CustomersSelect.schema';
import { CustomersIncludeObjectSchema } from './objects/CustomersInclude.schema';
import { CustomersWhereUniqueInputObjectSchema } from './objects/CustomersWhereUniqueInput.schema';
import { CustomersCreateInputObjectSchema } from './objects/CustomersCreateInput.schema';
import { CustomersUncheckedCreateInputObjectSchema } from './objects/CustomersUncheckedCreateInput.schema';
import { CustomersUpdateInputObjectSchema } from './objects/CustomersUpdateInput.schema';
import { CustomersUncheckedUpdateInputObjectSchema } from './objects/CustomersUncheckedUpdateInput.schema';

export const CustomersUpsertSchema = z.object({ select: CustomersSelectObjectSchema.optional(), include: CustomersIncludeObjectSchema.optional(), where: CustomersWhereUniqueInputObjectSchema, create: z.union([ CustomersCreateInputObjectSchema, CustomersUncheckedCreateInputObjectSchema ]), update: z.union([ CustomersUpdateInputObjectSchema, CustomersUncheckedUpdateInputObjectSchema ])  })