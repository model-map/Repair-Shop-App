import { z } from 'zod';
import { TicketsSelectObjectSchema } from './objects/TicketsSelect.schema';
import { TicketsCreateManyInputObjectSchema } from './objects/TicketsCreateManyInput.schema';

export const TicketsCreateManyAndReturnSchema = z.object({ select: TicketsSelectObjectSchema.optional(), data: z.union([ TicketsCreateManyInputObjectSchema, z.array(TicketsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()