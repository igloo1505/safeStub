import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    listedPrice: z.literal(true).optional(),
    sellerId: z.literal(true).optional(),
    buyerId: z.literal(true).optional(),
    status: z.literal(true).optional(),
    total: z.literal(true).optional(),
    payout: z.literal(true).optional(),
    payoutMethod: z.literal(true).optional(),
    postedOn: z.literal(true).optional(),
    purchasedOn: z.literal(true).optional(),
  })
  .strict();

export const TransactionMinAggregateInputObjectSchema = Schema;
