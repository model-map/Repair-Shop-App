import { z } from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { CustomersCreateWithoutTicketsInputObjectSchema } from './CustomersCreateWithoutTicketsInput.schema';
import { CustomersUncheckedCreateWithoutTicketsInputObjectSchema } from './CustomersUncheckedCreateWithoutTicketsInput.schema';
import { CustomersCreateOrConnectWithoutTicketsInputObjectSchema } from './CustomersCreateOrConnectWithoutTicketsInput.schema';
import { CustomersUpsertWithoutTicketsInputObjectSchema } from './CustomersUpsertWithoutTicketsInput.schema';
import { CustomersWhereUniqueInputObjectSchema } from './CustomersWhereUniqueInput.schema';
import { CustomersUpdateToOneWithWhereWithoutTicketsInputObjectSchema } from './CustomersUpdateToOneWithWhereWithoutTicketsInput.schema';
import { CustomersUpdateWithoutTicketsInputObjectSchema } from './CustomersUpdateWithoutTicketsInput.schema';
import { CustomersUncheckedUpdateWithoutTicketsInputObjectSchema } from './CustomersUncheckedUpdateWithoutTicketsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomersCreateWithoutTicketsInputObjectSchema), z.lazy(() => CustomersUncheckedCreateWithoutTicketsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CustomersCreateOrConnectWithoutTicketsInputObjectSchema).optional(),
  upsert: z.lazy(() => CustomersUpsertWithoutTicketsInputObjectSchema).optional(),
  connect: z.lazy(() => CustomersWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CustomersUpdateToOneWithWhereWithoutTicketsInputObjectSchema), z.lazy(() => CustomersUpdateWithoutTicketsInputObjectSchema), z.lazy(() => CustomersUncheckedUpdateWithoutTicketsInputObjectSchema)]).optional()
}).strict();
export const CustomersUpdateOneRequiredWithoutTicketsNestedInputObjectSchema: z.ZodType<Prisma.CustomersUpdateOneRequiredWithoutTicketsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomersUpdateOneRequiredWithoutTicketsNestedInput>;
export const CustomersUpdateOneRequiredWithoutTicketsNestedInputObjectZodSchema = makeSchema();
