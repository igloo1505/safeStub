import { z } from 'zod';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { TRANSACTIONSTATUSSchema } from '../enums/TRANSACTIONSTATUS.schema';
import { EnumTRANSACTIONSTATUSFieldUpdateOperationsInputObjectSchema } from './EnumTRANSACTIONSTATUSFieldUpdateOperationsInput.schema';
import { PAYOUTMETHODSSchema } from '../enums/PAYOUTMETHODS.schema';
import { EnumPAYOUTMETHODSFieldUpdateOperationsInputObjectSchema } from './EnumPAYOUTMETHODSFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { PurchaseHistoryUpdateOneRequiredWithoutSoldNestedInputObjectSchema } from './PurchaseHistoryUpdateOneRequiredWithoutSoldNestedInput.schema';
import { TicketUpdateManyWithoutTransactionNestedInputObjectSchema } from './TicketUpdateManyWithoutTransactionNestedInput.schema';
import { TicketGroupUpdateManyWithoutTransactionNestedInputObjectSchema } from './TicketGroupUpdateManyWithoutTransactionNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionUpdateWithoutBuyerInput> = z
  .object({
    listedPrice: z
      .union([
        z.number(),
        z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    status: z
      .union([
        z.lazy(() => TRANSACTIONSTATUSSchema),
        z.lazy(
          () => EnumTRANSACTIONSTATUSFieldUpdateOperationsInputObjectSchema,
        ),
      ])
      .optional(),
    total: z
      .union([
        z.number(),
        z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    payout: z
      .union([
        z.number(),
        z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    payoutMethod: z
      .union([
        z.lazy(() => PAYOUTMETHODSSchema),
        z.lazy(() => EnumPAYOUTMETHODSFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    postedOn: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    purchasedOn: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    seller: z
      .lazy(
        () =>
          PurchaseHistoryUpdateOneRequiredWithoutSoldNestedInputObjectSchema,
      )
      .optional(),
    tickets: z
      .lazy(() => TicketUpdateManyWithoutTransactionNestedInputObjectSchema)
      .optional(),
    ticketGroups: z
      .lazy(
        () => TicketGroupUpdateManyWithoutTransactionNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TransactionUpdateWithoutBuyerInputObjectSchema = Schema;
