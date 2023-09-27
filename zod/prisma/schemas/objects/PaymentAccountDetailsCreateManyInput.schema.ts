import { z } from 'zod';
import { PAYOUTMETHODSSchema } from '../enums/PAYOUTMETHODS.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountDetailsCreateManyInput> = z
  .object({
    id: z.number().optional(),
    nameOnAccount: z.string(),
    paymentMethodType: z.lazy(() => PAYOUTMETHODSSchema),
  })
  .strict();

export const PaymentAccountDetailsCreateManyInputObjectSchema = Schema;
