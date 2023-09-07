import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionUnboundCreateInput> = z
  .object({
    price: z.number(),
    paymentId: z.string(),
    sellerId: z.number(),
    buyerId: z.number(),
    date: z.coerce.date().optional(),
  })
  .strict();

export const TransactionUnboundCreateInputObjectSchema = Schema;
