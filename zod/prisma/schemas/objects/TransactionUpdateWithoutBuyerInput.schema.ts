import { z } from 'zod';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { PurchaseHistoryUpdateOneRequiredWithoutSoldNestedInputObjectSchema } from './PurchaseHistoryUpdateOneRequiredWithoutSoldNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionUpdateWithoutBuyerInput> = z
  .object({
    price: z
      .union([
        z.number(),
        z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    paymentId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    date: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    seller: z
      .lazy(
        () =>
          PurchaseHistoryUpdateOneRequiredWithoutSoldNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TransactionUpdateWithoutBuyerInputObjectSchema = Schema;
