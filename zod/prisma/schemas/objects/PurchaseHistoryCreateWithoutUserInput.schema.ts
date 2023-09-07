import { z } from 'zod';
import { TransactionCreateNestedManyWithoutBuyerInputObjectSchema } from './TransactionCreateNestedManyWithoutBuyerInput.schema';
import { TransactionCreateNestedManyWithoutSellerInputObjectSchema } from './TransactionCreateNestedManyWithoutSellerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseHistoryCreateWithoutUserInput> = z
  .object({
    bought: z
      .lazy(() => TransactionCreateNestedManyWithoutBuyerInputObjectSchema)
      .optional(),
    sold: z
      .lazy(() => TransactionCreateNestedManyWithoutSellerInputObjectSchema)
      .optional(),
  })
  .strict();

export const PurchaseHistoryCreateWithoutUserInputObjectSchema = Schema;
