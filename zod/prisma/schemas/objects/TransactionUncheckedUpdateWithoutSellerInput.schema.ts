import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { TRANSACTIONSTATUSSchema } from '../enums/TRANSACTIONSTATUS.schema';
import { EnumTRANSACTIONSTATUSFieldUpdateOperationsInputObjectSchema } from './EnumTRANSACTIONSTATUSFieldUpdateOperationsInput.schema';
import { PAYOUTMETHODSSchema } from '../enums/PAYOUTMETHODS.schema';
import { EnumPAYOUTMETHODSFieldUpdateOperationsInputObjectSchema } from './EnumPAYOUTMETHODSFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { TicketUncheckedUpdateManyWithoutTransactionNestedInputObjectSchema } from './TicketUncheckedUpdateManyWithoutTransactionNestedInput.schema';
import { TicketGroupUncheckedUpdateManyWithoutTransactionNestedInputObjectSchema } from './TicketGroupUncheckedUpdateManyWithoutTransactionNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionUncheckedUpdateWithoutSellerInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    listedPrice: z
      .union([
        z.number(),
        z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    buyerId: z
      .union([
        z.number(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
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
    tickets: z
      .lazy(
        () =>
          TicketUncheckedUpdateManyWithoutTransactionNestedInputObjectSchema,
      )
      .optional(),
    ticketGroups: z
      .lazy(
        () =>
          TicketGroupUncheckedUpdateManyWithoutTransactionNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TransactionUncheckedUpdateWithoutSellerInputObjectSchema = Schema;
