import { z } from 'zod';
import { TransactionUpdateManyWithoutBuyerNestedInputObjectSchema } from './TransactionUpdateManyWithoutBuyerNestedInput.schema';
import { UserUpdateOneRequiredWithoutPurchaseHistoryNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutPurchaseHistoryNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseHistoryUpdateWithoutSoldInput> = z
  .object({
    bought: z
      .lazy(() => TransactionUpdateManyWithoutBuyerNestedInputObjectSchema)
      .optional(),
    user: z
      .lazy(
        () =>
          UserUpdateOneRequiredWithoutPurchaseHistoryNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PurchaseHistoryUpdateWithoutSoldInputObjectSchema = Schema;
