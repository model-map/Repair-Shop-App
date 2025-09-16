import { z } from 'zod';
import { CustomersSelectObjectSchema } from './objects/CustomersSelect.schema';
import { CustomersCreateManyInputObjectSchema } from './objects/CustomersCreateManyInput.schema';

export const CustomersCreateManyAndReturnSchema = z.object({ select: CustomersSelectObjectSchema.optional(), data: z.union([ CustomersCreateManyInputObjectSchema, z.array(CustomersCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()