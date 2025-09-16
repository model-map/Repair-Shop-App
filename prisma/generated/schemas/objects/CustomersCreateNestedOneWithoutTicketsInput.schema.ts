import { z } from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { CustomersCreateWithoutTicketsInputObjectSchema } from './CustomersCreateWithoutTicketsInput.schema';
import { CustomersUncheckedCreateWithoutTicketsInputObjectSchema } from './CustomersUncheckedCreateWithoutTicketsInput.schema';
import { CustomersCreateOrConnectWithoutTicketsInputObjectSchema } from './CustomersCreateOrConnectWithoutTicketsInput.schema';
import { CustomersWhereUniqueInputObjectSchema } from './CustomersWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomersCreateWithoutTicketsInputObjectSchema), z.lazy(() => CustomersUncheckedCreateWithoutTicketsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CustomersCreateOrConnectWithoutTicketsInputObjectSchema).optional(),
  connect: z.lazy(() => CustomersWhereUniqueInputObjectSchema).optional()
}).strict();
export const CustomersCreateNestedOneWithoutTicketsInputObjectSchema: z.ZodType<Prisma.CustomersCreateNestedOneWithoutTicketsInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomersCreateNestedOneWithoutTicketsInput>;
export const CustomersCreateNestedOneWithoutTicketsInputObjectZodSchema = makeSchema();
