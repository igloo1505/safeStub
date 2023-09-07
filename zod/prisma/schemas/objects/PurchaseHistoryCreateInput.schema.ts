import { z } from 'zod';
import { TransactionCreateNestedManyWithoutBuyerInputObjectSchema } from './TransactionCreateNestedManyWithoutBuyerInput.schema';
import { TransactionCreateNestedManyWithoutSellerInputObjectSchema } from './TransactionCreateNestedManyWithoutSellerInput.schema';
import { UserCreateNestedOneWithoutPurchaseHistoryInputObjectSchema } from './UserCreateNestedOneWithoutPurchaseHistoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseHistoryCreateInput> = z
  .object({
    bought: z
      .lazy(() => TransactionCreateNestedManyWithoutBuyerInputObjectSchema)
      .optional(),
    sold: z
      .lazy(() => TransactionCreateNestedManyWithoutSellerInputObjectSchema)
      .optional(),
    user: z.lazy(
      () => UserCreateNestedOneWithoutPurchaseHistoryInputObjectSchema,
    ),
  })
  .strict();

export const PurchaseHistoryCreateInputObjectSchema = Schema;
