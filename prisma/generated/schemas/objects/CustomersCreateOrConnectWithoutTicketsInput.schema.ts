import { z } from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { CustomersWhereUniqueInputObjectSchema } from './CustomersWhereUniqueInput.schema';
import { CustomersCreateWithoutTicketsInputObjectSchema } from './CustomersCreateWithoutTicketsInput.schema';
import { CustomersUncheckedCreateWithoutTicketsInputObjectSchema } from './CustomersUncheckedCreateWithoutTicketsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomersWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CustomersCreateWithoutTicketsInputObjectSchema), z.lazy(() => CustomersUncheckedCreateWithoutTicketsInputObjectSchema)])
}).strict();
export const CustomersCreateOrConnectWithoutTicketsInputObjectSchema: z.ZodType<Prisma.CustomersCreateOrConnectWithoutTicketsInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomersCreateOrConnectWithoutTicketsInput>;
export const CustomersCreateOrConnectWithoutTicketsInputObjectZodSchema = makeSchema();
