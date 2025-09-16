import { z } from 'zod';
import { CustomersSelectObjectSchema } from './objects/CustomersSelect.schema';
import { CustomersIncludeObjectSchema } from './objects/CustomersInclude.schema';
import { CustomersWhereUniqueInputObjectSchema } from './objects/CustomersWhereUniqueInput.schema';

export const CustomersDeleteOneSchema = z.object({ select: CustomersSelectObjectSchema.optional(), include: CustomersIncludeObjectSchema.optional(), where: CustomersWhereUniqueInputObjectSchema  })