import { z } from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { CustomersWhereInputObjectSchema } from './CustomersWhereInput.schema';
import { CustomersUpdateWithoutTicketsInputObjectSchema } from './CustomersUpdateWithoutTicketsInput.schema';
import { CustomersUncheckedUpdateWithoutTicketsInputObjectSchema } from './CustomersUncheckedUpdateWithoutTicketsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomersWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CustomersUpdateWithoutTicketsInputObjectSchema), z.lazy(() => CustomersUncheckedUpdateWithoutTicketsInputObjectSchema)])
}).strict();
export const CustomersUpdateToOneWithWhereWithoutTicketsInputObjectSchema: z.ZodType<Prisma.CustomersUpdateToOneWithWhereWithoutTicketsInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomersUpdateToOneWithWhereWithoutTicketsInput>;
export const CustomersUpdateToOneWithWhereWithoutTicketsInputObjectZodSchema = makeSchema();
