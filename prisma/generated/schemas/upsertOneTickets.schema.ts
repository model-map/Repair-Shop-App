import { z } from 'zod';
import { TicketsSelectObjectSchema } from './objects/TicketsSelect.schema';
import { TicketsIncludeObjectSchema } from './objects/TicketsInclude.schema';
import { TicketsWhereUniqueInputObjectSchema } from './objects/TicketsWhereUniqueInput.schema';
import { TicketsCreateInputObjectSchema } from './objects/TicketsCreateInput.schema';
import { TicketsUncheckedCreateInputObjectSchema } from './objects/TicketsUncheckedCreateInput.schema';
import { TicketsUpdateInputObjectSchema } from './objects/TicketsUpdateInput.schema';
import { TicketsUncheckedUpdateInputObjectSchema } from './objects/TicketsUncheckedUpdateInput.schema';

export const TicketsUpsertSchema = z.object({ select: TicketsSelectObjectSchema.optional(), include: TicketsIncludeObjectSchema.optional(), where: TicketsWhereUniqueInputObjectSchema, create: z.union([ TicketsCreateInputObjectSchema, TicketsUncheckedCreateInputObjectSchema ]), update: z.union([ TicketsUpdateInputObjectSchema, TicketsUncheckedUpdateInputObjectSchema ])  })