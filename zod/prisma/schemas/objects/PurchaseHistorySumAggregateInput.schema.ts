import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseHistorySumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    userId: z.literal(true).optional(),
  })
  .strict();

export const PurchaseHistorySumAggregateInputObjectSchema = Schema;
