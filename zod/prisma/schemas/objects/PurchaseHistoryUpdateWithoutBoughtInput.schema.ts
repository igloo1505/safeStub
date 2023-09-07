import { z } from 'zod';
import { TransactionUpdateManyWithoutSellerNestedInputObjectSchema } from './TransactionUpdateManyWithoutSellerNestedInput.schema';
import { UserUpdateOneRequiredWithoutPurchaseHistoryNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutPurchaseHistoryNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseHistoryUpdateWithoutBoughtInput> = z
  .object({
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

export const PurchaseHistoryUpdateWithoutBoughtInputObjectSchema = Schema;
