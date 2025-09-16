import { z } from 'zod';
import { CustomersSelectObjectSchema } from './objects/CustomersSelect.schema';
import { CustomersUpdateManyMutationInputObjectSchema } from './objects/CustomersUpdateManyMutationInput.schema';
import { CustomersWhereInputObjectSchema } from './objects/CustomersWhereInput.schema';

export const CustomersUpdateManyAndReturnSchema = z.object({ select: CustomersSelectObjectSchema.optional(), data: CustomersUpdateManyMutationInputObjectSchema, where: CustomersWhereInputObjectSchema.optional()  }).strict()