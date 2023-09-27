import { z } from 'zod';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { TRANSACTIONSTATUSSchema } from '../enums/TRANSACTIONSTATUS.schema';
import { EnumTRANSACTIONSTATUSFieldUpdateOperationsInputObjectSchema } from './EnumTRANSACTIONSTATUSFieldUpdateOperationsInput.schema';
import { PAYOUTMETHODSSchema } from '../enums/PAYOUTMETHODS.schema';
import { EnumPAYOUTMETHODSFieldUpdateOperationsInputObjectSchema } from './EnumPAYOUTMETHODSFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionUpdateManyMutationInput> = z
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
  })
  .strict();

export const TransactionUpdateManyMutationInputObjectSchema = Schema;
