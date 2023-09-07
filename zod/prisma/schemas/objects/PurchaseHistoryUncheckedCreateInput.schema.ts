import { z } from 'zod';
import { TransactionUncheckedCreateNestedManyWithoutBuyerInputObjectSchema } from './TransactionUncheckedCreateNestedManyWithoutBuyerInput.schema';
import { TransactionUncheckedCreateNestedManyWithoutSellerInputObjectSchema } from './TransactionUncheckedCreateNestedManyWithoutSellerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseHistoryUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    userId: z.string(),
    bought: z
      .lazy(
        () => TransactionUncheckedCreateNestedManyWithoutBuyerInputObjectSchema,
      )
      .optional(),
    sold: z
      .lazy(
        () =>
          TransactionUncheckedCreateNestedManyWithoutSellerInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PurchaseHistoryUncheckedCreateInputObjectSchema = Schema;
