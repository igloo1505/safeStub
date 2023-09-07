import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { TransactionUncheckedUpdateManyWithoutBuyerNestedInputObjectSchema } from './TransactionUncheckedUpdateManyWithoutBuyerNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseHistoryUncheckedUpdateWithoutSoldInput> =
  z
    .object({
      id: z
        .union([
          z.number(),
          z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      userId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      bought: z
        .lazy(
          () =>
            TransactionUncheckedUpdateManyWithoutBuyerNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const PurchaseHistoryUncheckedUpdateWithoutSoldInputObjectSchema =
  Schema;
