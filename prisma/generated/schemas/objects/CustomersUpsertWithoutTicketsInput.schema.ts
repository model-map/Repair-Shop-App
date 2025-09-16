import { z } from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { CustomersUpdateWithoutTicketsInputObjectSchema } from './CustomersUpdateWithoutTicketsInput.schema';
import { CustomersUncheckedUpdateWithoutTicketsInputObjectSchema } from './CustomersUncheckedUpdateWithoutTicketsInput.schema';
import { CustomersCreateWithoutTicketsInputObjectSchema } from './CustomersCreateWithoutTicketsInput.schema';
import { CustomersUncheckedCreateWithoutTicketsInputObjectSchema } from './CustomersUncheckedCreateWithoutTicketsInput.schema';
import { CustomersWhereInputObjectSchema } from './CustomersWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CustomersUpdateWithoutTicketsInputObjectSchema), z.lazy(() => CustomersUncheckedUpdateWithoutTicketsInputObjectSchema)]),
  create: z.union([z.lazy(() => CustomersCreateWithoutTicketsInputObjectSchema), z.lazy(() => CustomersUncheckedCreateWithoutTicketsInputObjectSchema)]),
  where: z.lazy(() => CustomersWhereInputObjectSchema).optional()
}).strict();
export const CustomersUpsertWithoutTicketsInputObjectSchema: z.ZodType<Prisma.CustomersUpsertWithoutTicketsInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomersUpsertWithoutTicketsInput>;
export const CustomersUpsertWithoutTicketsInputObjectZodSchema = makeSchema();
