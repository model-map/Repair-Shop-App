import { z } from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { TicketsScalarWhereInputObjectSchema } from './TicketsScalarWhereInput.schema';
import { TicketsUpdateManyMutationInputObjectSchema } from './TicketsUpdateManyMutationInput.schema';
import { TicketsUncheckedUpdateManyWithoutCustomerInputObjectSchema } from './TicketsUncheckedUpdateManyWithoutCustomerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TicketsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TicketsUpdateManyMutationInputObjectSchema), z.lazy(() => TicketsUncheckedUpdateManyWithoutCustomerInputObjectSchema)])
}).strict();
export const TicketsUpdateManyWithWhereWithoutCustomerInputObjectSchema: z.ZodType<Prisma.TicketsUpdateManyWithWhereWithoutCustomerInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketsUpdateManyWithWhereWithoutCustomerInput>;
export const TicketsUpdateManyWithWhereWithoutCustomerInputObjectZodSchema = makeSchema();
