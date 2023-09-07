import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TransactionScalarWhereInputObjectSchema),
        z.lazy(() => TransactionScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TransactionScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TransactionScalarWhereInputObjectSchema),
        z.lazy(() => TransactionScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    price: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    paymentId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    sellerId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    buyerId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    date: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
  })
  .strict();

export const TransactionScalarWhereInputObjectSchema = Schema;
