import { z } from 'zod';
import { TicketsSelectObjectSchema } from './objects/TicketsSelect.schema';
import { TicketsUpdateManyMutationInputObjectSchema } from './objects/TicketsUpdateManyMutationInput.schema';
import { TicketsWhereInputObjectSchema } from './objects/TicketsWhereInput.schema';

export const TicketsUpdateManyAndReturnSchema = z.object({ select: TicketsSelectObjectSchema.optional(), data: TicketsUpdateManyMutationInputObjectSchema, where: TicketsWhereInputObjectSchema.optional()  }).strict()