import { z } from 'zod';
import { TicketsCreateManyInputObjectSchema } from './objects/TicketsCreateManyInput.schema';

export const TicketsCreateManySchema = z.object({ data: z.union([ TicketsCreateManyInputObjectSchema, z.array(TicketsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })