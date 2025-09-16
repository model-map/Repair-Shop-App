import { z } from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { TicketsWhereUniqueInputObjectSchema } from './TicketsWhereUniqueInput.schema';
import { TicketsUpdateWithoutCustomerInputObjectSchema } from './TicketsUpdateWithoutCustomerInput.schema';
import { TicketsUncheckedUpdateWithoutCustomerInputObjectSchema } from './TicketsUncheckedUpdateWithoutCustomerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TicketsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TicketsUpdateWithoutCustomerInputObjectSchema), z.lazy(() => TicketsUncheckedUpdateWithoutCustomerInputObjectSchema)])
}).strict();
export const TicketsUpdateWithWhereUniqueWithoutCustomerInputObjectSchema: z.ZodType<Prisma.TicketsUpdateWithWhereUniqueWithoutCustomerInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketsUpdateWithWhereUniqueWithoutCustomerInput>;
export const TicketsUpdateWithWhereUniqueWithoutCustomerInputObjectZodSchema = makeSchema();
