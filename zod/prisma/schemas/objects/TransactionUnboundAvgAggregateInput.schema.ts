import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionUnboundAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    price: z.literal(true).optional(),
    sellerId: z.literal(true).optional(),
    buyerId: z.literal(true).optional(),
  })
  .strict();

export const TransactionUnboundAvgAggregateInputObjectSchema = Schema;
