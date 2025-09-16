import { z } from 'zod';
import { CustomersWhereInputObjectSchema } from './objects/CustomersWhereInput.schema';

export const CustomersDeleteManySchema = z.object({ where: CustomersWhereInputObjectSchema.optional()  })