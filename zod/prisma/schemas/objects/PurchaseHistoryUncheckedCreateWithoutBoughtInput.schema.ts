import { z } from 'zod';
import { TransactionUncheckedCreateNestedManyWithoutSellerInputObjectSchema } from './TransactionUncheckedCreateNestedManyWithoutSellerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseHistoryUncheckedCreateWithoutBoughtInput> =
  z
    .object({
      id: z.number().optional(),
      userId: z.string(),
      sold: z
        .lazy(
          () =>
            TransactionUncheckedCreateNestedManyWithoutSellerInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const PurchaseHistoryUncheckedCreateWithoutBoughtInputObjectSchema =
  Schema;
