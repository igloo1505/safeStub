import { z } from 'zod';
import { PurchaseHistoryCreateNestedOneWithoutSoldInputObjectSchema } from './PurchaseHistoryCreateNestedOneWithoutSoldInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionCreateWithoutBuyerInput> = z
  .object({
    price: z.number(),
    paymentId: z.string(),
    date: z.coerce.date().optional(),
    seller: z.lazy(
      () => PurchaseHistoryCreateNestedOneWithoutSoldInputObjectSchema,
    ),
  })
  .strict();

export const TransactionCreateWithoutBuyerInputObjectSchema = Schema;
