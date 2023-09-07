import { z } from 'zod';
import { TransactionCreateNestedManyWithoutBuyerInputObjectSchema } from './TransactionCreateNestedManyWithoutBuyerInput.schema';
import { UserCreateNestedOneWithoutPurchaseHistoryInputObjectSchema } from './UserCreateNestedOneWithoutPurchaseHistoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseHistoryCreateWithoutSoldInput> = z
  .object({
    bought: z
      .lazy(() => TransactionCreateNestedManyWithoutBuyerInputObjectSchema)
      .optional(),
    user: z.lazy(
      () => UserCreateNestedOneWithoutPurchaseHistoryInputObjectSchema,
    ),
  })
  .strict();

export const PurchaseHistoryCreateWithoutSoldInputObjectSchema = Schema;
