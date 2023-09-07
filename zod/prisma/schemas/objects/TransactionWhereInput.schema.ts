import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { PurchaseHistoryRelationFilterObjectSchema } from './PurchaseHistoryRelationFilter.schema';
import { PurchaseHistoryWhereInputObjectSchema } from './PurchaseHistoryWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TransactionWhereInputObjectSchema),
        z.lazy(() => TransactionWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TransactionWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TransactionWhereInputObjectSchema),
        z.lazy(() => TransactionWhereInputObjectSchema).array(),
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
    seller: z
      .union([
        z.lazy(() => PurchaseHistoryRelationFilterObjectSchema),
        z.lazy(() => PurchaseHistoryWhereInputObjectSchema),
      ])
      .optional(),
    buyer: z
      .union([
        z.lazy(() => PurchaseHistoryRelationFilterObjectSchema),
        z.lazy(() => PurchaseHistoryWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const TransactionWhereInputObjectSchema = Schema;
