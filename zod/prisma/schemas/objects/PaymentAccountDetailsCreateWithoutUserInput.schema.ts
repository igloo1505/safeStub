import { z } from 'zod';
import { PAYOUTMETHODSSchema } from '../enums/PAYOUTMETHODS.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountDetailsCreateWithoutUserInput> = z
  .object({
    nameOnAccount: z.string(),
    paymentMethodType: z.lazy(() => PAYOUTMETHODSSchema),
  })
  .strict();

export const PaymentAccountDetailsCreateWithoutUserInputObjectSchema = Schema;
