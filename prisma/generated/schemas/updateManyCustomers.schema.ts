import { z } from 'zod';
import { CustomersUpdateManyMutationInputObjectSchema } from './objects/CustomersUpdateManyMutationInput.schema';
import { CustomersWhereInputObjectSchema } from './objects/CustomersWhereInput.schema';

export const CustomersUpdateManySchema = z.object({ data: CustomersUpdateManyMutationInputObjectSchema, where: CustomersWhereInputObjectSchema.optional()  })