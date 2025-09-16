import { z } from 'zod';
import { CustomersSelectObjectSchema } from './objects/CustomersSelect.schema';
import { CustomersIncludeObjectSchema } from './objects/CustomersInclude.schema';
import { CustomersUpdateInputObjectSchema } from './objects/CustomersUpdateInput.schema';
import { CustomersUncheckedUpdateInputObjectSchema } from './objects/CustomersUncheckedUpdateInput.schema';
import { CustomersWhereUniqueInputObjectSchema } from './objects/CustomersWhereUniqueInput.schema';

export const CustomersUpdateOneSchema = z.object({ select: CustomersSelectObjectSchema.optional(), include: CustomersIncludeObjectSchema.optional(), data: z.union([CustomersUpdateInputObjectSchema, CustomersUncheckedUpdateInputObjectSchema]), where: CustomersWhereUniqueInputObjectSchema  })