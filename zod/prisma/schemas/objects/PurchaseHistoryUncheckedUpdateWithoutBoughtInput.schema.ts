import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { TransactionUncheckedUpdateManyWithoutSellerNestedInputObjectSchema } from './TransactionUncheckedUpdateManyWithoutSellerNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseHistoryUncheckedUpdateWithoutBoughtInput> =
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
      sold: z
        .lazy(
          () =>
            TransactionUncheckedUpdateManyWithoutSellerNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const PurchaseHistoryUncheckedUpdateWithoutBoughtInputObjectSchema =
  Schema;
