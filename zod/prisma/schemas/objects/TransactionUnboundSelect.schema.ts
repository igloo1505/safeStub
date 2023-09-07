import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionUnboundSelect> = z
  .object({
    id: z.boolean().optional(),
    price: z.boolean().optional(),
    paymentId: z.boolean().optional(),
    sellerId: z.boolean().optional(),
    buyerId: z.boolean().optional(),
    date: z.boolean().optional(),
  })
  .strict();

export const TransactionUnboundSelectObjectSchema = Schema;
