import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountDetailsMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    nameOnAccount: z.literal(true).optional(),
    paymentMethodType: z.literal(true).optional(),
  })
  .strict();

export const PaymentAccountDetailsMinAggregateInputObjectSchema = Schema;
