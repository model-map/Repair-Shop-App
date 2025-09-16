import { z } from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { TicketsCreateWithoutCustomerInputObjectSchema } from './TicketsCreateWithoutCustomerInput.schema';
import { TicketsUncheckedCreateWithoutCustomerInputObjectSchema } from './TicketsUncheckedCreateWithoutCustomerInput.schema';
import { TicketsCreateOrConnectWithoutCustomerInputObjectSchema } from './TicketsCreateOrConnectWithoutCustomerInput.schema';
import { TicketsCreateManyCustomerInputEnvelopeObjectSchema } from './TicketsCreateManyCustomerInputEnvelope.schema';
import { TicketsWhereUniqueInputObjectSchema } from './TicketsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TicketsCreateWithoutCustomerInputObjectSchema), z.lazy(() => TicketsCreateWithoutCustomerInputObjectSchema).array(), z.lazy(() => TicketsUncheckedCreateWithoutCustomerInputObjectSchema), z.lazy(() => TicketsUncheckedCreateWithoutCustomerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TicketsCreateOrConnectWithoutCustomerInputObjectSchema), z.lazy(() => TicketsCreateOrConnectWithoutCustomerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TicketsCreateManyCustomerInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TicketsWhereUniqueInputObjectSchema), z.lazy(() => TicketsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TicketsCreateNestedManyWithoutCustomerInputObjectSchema: z.ZodType<Prisma.TicketsCreateNestedManyWithoutCustomerInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketsCreateNestedManyWithoutCustomerInput>;
export const TicketsCreateNestedManyWithoutCustomerInputObjectZodSchema = makeSchema();
