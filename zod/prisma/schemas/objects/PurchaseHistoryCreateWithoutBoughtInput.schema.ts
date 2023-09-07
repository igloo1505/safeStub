import { z } from 'zod';
import { TransactionCreateNestedManyWithoutSellerInputObjectSchema } from './TransactionCreateNestedManyWithoutSellerInput.schema';
import { UserCreateNestedOneWithoutPurchaseHistoryInputObjectSchema } from './UserCreateNestedOneWithoutPurchaseHistoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseHistoryCreateWithoutBoughtInput> = z
  .object({
    sold: z
      .lazy(() => TransactionCreateNestedManyWithoutSellerInputObjectSchema)
      .optional(),
    user: z.lazy(
      () => UserCreateNestedOneWithoutPurchaseHistoryInputObjectSchema,
    ),
  })
  .strict();

export const PurchaseHistoryCreateWithoutBoughtInputObjectSchema = Schema;
