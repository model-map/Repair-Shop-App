import { z } from 'zod';
import { TicketsSelectObjectSchema } from './objects/TicketsSelect.schema';
import { TicketsIncludeObjectSchema } from './objects/TicketsInclude.schema';
import { TicketsUpdateInputObjectSchema } from './objects/TicketsUpdateInput.schema';
import { TicketsUncheckedUpdateInputObjectSchema } from './objects/TicketsUncheckedUpdateInput.schema';
import { TicketsWhereUniqueInputObjectSchema } from './objects/TicketsWhereUniqueInput.schema';

export const TicketsUpdateOneSchema = z.object({ select: TicketsSelectObjectSchema.optional(), include: TicketsIncludeObjectSchema.optional(), data: z.union([TicketsUpdateInputObjectSchema, TicketsUncheckedUpdateInputObjectSchema]), where: TicketsWhereUniqueInputObjectSchema  })