import { z } from 'zod';
import { PurchaseHistoryCreateNestedOneWithoutSoldInputObjectSchema } from './PurchaseHistoryCreateNestedOneWithoutSoldInput.schema';
import { PurchaseHistoryCreateNestedOneWithoutBoughtInputObjectSchema } from './PurchaseHistoryCreateNestedOneWithoutBoughtInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionCreateInput> = z
  .object({
    price: z.number(),
    paymentId: z.string(),
    date: z.coerce.date().optional(),
    seller: z.lazy(
      () => PurchaseHistoryCreateNestedOneWithoutSoldInputObjectSchema,
    ),
    buyer: z.lazy(
      () => PurchaseHistoryCreateNestedOneWithoutBoughtInputObjectSchema,
    ),
  })
  .strict();

export const TransactionCreateInputObjectSchema = Schema;
