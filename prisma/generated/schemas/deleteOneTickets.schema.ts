import { z } from 'zod';
import { TicketsSelectObjectSchema } from './objects/TicketsSelect.schema';
import { TicketsIncludeObjectSchema } from './objects/TicketsInclude.schema';
import { TicketsWhereUniqueInputObjectSchema } from './objects/TicketsWhereUniqueInput.schema';

export const TicketsDeleteOneSchema = z.object({ select: TicketsSelectObjectSchema.optional(), include: TicketsIncludeObjectSchema.optional(), where: TicketsWhereUniqueInputObjectSchema  })