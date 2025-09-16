import { z } from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { TicketsWhereUniqueInputObjectSchema } from './TicketsWhereUniqueInput.schema';
import { TicketsCreateWithoutCustomerInputObjectSchema } from './TicketsCreateWithoutCustomerInput.schema';
import { TicketsUncheckedCreateWithoutCustomerInputObjectSchema } from './TicketsUncheckedCreateWithoutCustomerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TicketsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TicketsCreateWithoutCustomerInputObjectSchema), z.lazy(() => TicketsUncheckedCreateWithoutCustomerInputObjectSchema)])
}).strict();
export const TicketsCreateOrConnectWithoutCustomerInputObjectSchema: z.ZodType<Prisma.TicketsCreateOrConnectWithoutCustomerInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketsCreateOrConnectWithoutCustomerInput>;
export const TicketsCreateOrConnectWithoutCustomerInputObjectZodSchema = makeSchema();
