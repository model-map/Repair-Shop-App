import { z } from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { TicketsWhereUniqueInputObjectSchema } from './TicketsWhereUniqueInput.schema';
import { TicketsUpdateWithoutCustomerInputObjectSchema } from './TicketsUpdateWithoutCustomerInput.schema';
import { TicketsUncheckedUpdateWithoutCustomerInputObjectSchema } from './TicketsUncheckedUpdateWithoutCustomerInput.schema';
import { TicketsCreateWithoutCustomerInputObjectSchema } from './TicketsCreateWithoutCustomerInput.schema';
import { TicketsUncheckedCreateWithoutCustomerInputObjectSchema } from './TicketsUncheckedCreateWithoutCustomerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TicketsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TicketsUpdateWithoutCustomerInputObjectSchema), z.lazy(() => TicketsUncheckedUpdateWithoutCustomerInputObjectSchema)]),
  create: z.union([z.lazy(() => TicketsCreateWithoutCustomerInputObjectSchema), z.lazy(() => TicketsUncheckedCreateWithoutCustomerInputObjectSchema)])
}).strict();
export const TicketsUpsertWithWhereUniqueWithoutCustomerInputObjectSchema: z.ZodType<Prisma.TicketsUpsertWithWhereUniqueWithoutCustomerInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketsUpsertWithWhereUniqueWithoutCustomerInput>;
export const TicketsUpsertWithWhereUniqueWithoutCustomerInputObjectZodSchema = makeSchema();
