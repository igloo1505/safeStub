import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionUnboundCreateManyInput> = z
  .object({
    id: z.number().optional(),
    price: z.number(),
    paymentId: z.string(),
    sellerId: z.number(),
    buyerId: z.number(),
    date: z.coerce.date().optional(),
  })
  .strict();

export const TransactionUnboundCreateManyInputObjectSchema = Schema;
