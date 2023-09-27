import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { PAYOUTMETHODSSchema } from '../enums/PAYOUTMETHODS.schema';
import { EnumPAYOUTMETHODSFieldUpdateOperationsInputObjectSchema } from './EnumPAYOUTMETHODSFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountDetailsUpdateManyMutationInput> = z
  .object({
    nameOnAccount: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    paymentMethodType: z
      .union([
        z.lazy(() => PAYOUTMETHODSSchema),
        z.lazy(() => EnumPAYOUTMETHODSFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const PaymentAccountDetailsUpdateManyMutationInputObjectSchema = Schema;
