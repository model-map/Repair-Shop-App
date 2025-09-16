import { z } from 'zod';
import { TicketsSelectObjectSchema } from './objects/TicketsSelect.schema';
import { TicketsIncludeObjectSchema } from './objects/TicketsInclude.schema';
import { TicketsCreateInputObjectSchema } from './objects/TicketsCreateInput.schema';
import { TicketsUncheckedCreateInputObjectSchema } from './objects/TicketsUncheckedCreateInput.schema';

export const TicketsCreateOneSchema = z.object({ select: TicketsSelectObjectSchema.optional(), include: TicketsIncludeObjectSchema.optional(), data: z.union([TicketsCreateInputObjectSchema, TicketsUncheckedCreateInputObjectSchema])  })