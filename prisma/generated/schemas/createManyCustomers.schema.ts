import { z } from 'zod';
import { CustomersCreateManyInputObjectSchema } from './objects/CustomersCreateManyInput.schema';

export const CustomersCreateManySchema = z.object({ data: z.union([ CustomersCreateManyInputObjectSchema, z.array(CustomersCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })