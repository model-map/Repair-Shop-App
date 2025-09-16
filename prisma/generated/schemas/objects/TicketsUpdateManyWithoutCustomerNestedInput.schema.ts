import { z } from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { TicketsCreateWithoutCustomerInputObjectSchema } from './TicketsCreateWithoutCustomerInput.schema';
import { TicketsUncheckedCreateWithoutCustomerInputObjectSchema } from './TicketsUncheckedCreateWithoutCustomerInput.schema';
import { TicketsCreateOrConnectWithoutCustomerInputObjectSchema } from './TicketsCreateOrConnectWithoutCustomerInput.schema';
import { TicketsUpsertWithWhereUniqueWithoutCustomerInputObjectSchema } from './TicketsUpsertWithWhereUniqueWithoutCustomerInput.schema';
import { TicketsCreateManyCustomerInputEnvelopeObjectSchema } from './TicketsCreateManyCustomerInputEnvelope.schema';
import { TicketsWhereUniqueInputObjectSchema } from './TicketsWhereUniqueInput.schema';
import { TicketsUpdateWithWhereUniqueWithoutCustomerInputObjectSchema } from './TicketsUpdateWithWhereUniqueWithoutCustomerInput.schema';
import { TicketsUpdateManyWithWhereWithoutCustomerInputObjectSchema } from './TicketsUpdateManyWithWhereWithoutCustomerInput.schema';
import { TicketsScalarWhereInputObjectSchema } from './TicketsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TicketsCreateWithoutCustomerInputObjectSchema), z.lazy(() => TicketsCreateWithoutCustomerInputObjectSchema).array(), z.lazy(() => TicketsUncheckedCreateWithoutCustomerInputObjectSchema), z.lazy(() => TicketsUncheckedCreateWithoutCustomerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TicketsCreateOrConnectWithoutCustomerInputObjectSchema), z.lazy(() => TicketsCreateOrConnectWithoutCustomerInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TicketsUpsertWithWhereUniqueWithoutCustomerInputObjectSchema), z.lazy(() => TicketsUpsertWithWhereUniqueWithoutCustomerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TicketsCreateManyCustomerInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TicketsWhereUniqueInputObjectSchema), z.lazy(() => TicketsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TicketsWhereUniqueInputObjectSchema), z.lazy(() => TicketsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TicketsWhereUniqueInputObjectSchema), z.lazy(() => TicketsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TicketsWhereUniqueInputObjectSchema), z.lazy(() => TicketsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TicketsUpdateWithWhereUniqueWithoutCustomerInputObjectSchema), z.lazy(() => TicketsUpdateWithWhereUniqueWithoutCustomerInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TicketsUpdateManyWithWhereWithoutCustomerInputObjectSchema), z.lazy(() => TicketsUpdateManyWithWhereWithoutCustomerInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TicketsScalarWhereInputObjectSchema), z.lazy(() => TicketsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TicketsUpdateManyWithoutCustomerNestedInputObjectSchema: z.ZodType<Prisma.TicketsUpdateManyWithoutCustomerNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketsUpdateManyWithoutCustomerNestedInput>;
export const TicketsUpdateManyWithoutCustomerNestedInputObjectZodSchema = makeSchema();
