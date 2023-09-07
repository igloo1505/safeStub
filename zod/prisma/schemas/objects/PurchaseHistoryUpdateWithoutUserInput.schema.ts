import { z } from 'zod';
import { TransactionUpdateManyWithoutBuyerNestedInputObjectSchema } from './TransactionUpdateManyWithoutBuyerNestedInput.schema';
import { TransactionUpdateManyWithoutSellerNestedInputObjectSchema } from './TransactionUpdateManyWithoutSellerNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseHistoryUpdateWithoutUserInput> = z
  .object({
    bought: z
      .lazy(() => TransactionUpdateManyWithoutBuyerNestedInputObjectSchema)
      .optional(),
    sold: z
      .lazy(() => TransactionUpdateManyWithoutSellerNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const PurchaseHistoryUpdateWithoutUserInputObjectSchema = Schema;
