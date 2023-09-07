import { z } from 'zod';
import { TransactionUncheckedCreateNestedManyWithoutBuyerInputObjectSchema } from './TransactionUncheckedCreateNestedManyWithoutBuyerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseHistoryUncheckedCreateWithoutSoldInput> =
  z
    .object({
      id: z.number().optional(),
      userId: z.string(),
      bought: z
        .lazy(
          () =>
            TransactionUncheckedCreateNestedManyWithoutBuyerInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const PurchaseHistoryUncheckedCreateWithoutSoldInputObjectSchema =
  Schema;
