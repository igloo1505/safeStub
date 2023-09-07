import { z } from 'zod';
import { PurchaseHistoryCreateNestedOneWithoutBoughtInputObjectSchema } from './PurchaseHistoryCreateNestedOneWithoutBoughtInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionCreateWithoutSellerInput> = z
  .object({
    price: z.number(),
    paymentId: z.string(),
    date: z.coerce.date().optional(),
    buyer: z.lazy(
      () => PurchaseHistoryCreateNestedOneWithoutBoughtInputObjectSchema,
    ),
  })
  .strict();

export const TransactionCreateWithoutSellerInputObjectSchema = Schema;
