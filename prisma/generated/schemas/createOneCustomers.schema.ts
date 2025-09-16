import { z } from 'zod';
import { CustomersSelectObjectSchema } from './objects/CustomersSelect.schema';
import { CustomersIncludeObjectSchema } from './objects/CustomersInclude.schema';
import { CustomersCreateInputObjectSchema } from './objects/CustomersCreateInput.schema';
import { CustomersUncheckedCreateInputObjectSchema } from './objects/CustomersUncheckedCreateInput.schema';

export const CustomersCreateOneSchema = z.object({ select: CustomersSelectObjectSchema.optional(), include: CustomersIncludeObjectSchema.optional(), data: z.union([CustomersCreateInputObjectSchema, CustomersUncheckedCreateInputObjectSchema])  })