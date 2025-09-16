import { z } from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { TicketsCreateManyCustomerInputObjectSchema } from './TicketsCreateManyCustomerInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TicketsCreateManyCustomerInputObjectSchema), z.lazy(() => TicketsCreateManyCustomerInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TicketsCreateManyCustomerInputEnvelopeObjectSchema: z.ZodType<Prisma.TicketsCreateManyCustomerInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TicketsCreateManyCustomerInputEnvelope>;
export const TicketsCreateManyCustomerInputEnvelopeObjectZodSchema = makeSchema();
