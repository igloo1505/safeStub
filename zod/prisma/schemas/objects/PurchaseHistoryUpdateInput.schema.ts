import { z } from 'zod';
import { TransactionUpdateManyWithoutBuyerNestedInputObjectSchema } from './TransactionUpdateManyWithoutBuyerNestedInput.schema';
import { TransactionUpdateManyWithoutSellerNestedInputObjectSchema } from './TransactionUpdateManyWithoutSellerNestedInput.schema';
import { UserUpdateOneRequiredWithoutPurchaseHistoryNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutPurchaseHistoryNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseHistoryUpdateInput> = z
  .object({
    bought: z
      .lazy(() => TransactionUpdateManyWithoutBuyerNestedInputObjectSchema)
      .optional(),
    sold: z
      .lazy(() => TransactionUpdateManyWithoutSellerNestedInputObjectSchema)
      .optional(),
    user: z
      .lazy(
        () =>
          UserUpdateOneRequiredWithoutPurchaseHistoryNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PurchaseHistoryUpdateInputObjectSchema = Schema;
