import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaqAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    priority: z.literal(true).optional(),
  })
  .strict();

export const FaqAvgAggregateInputObjectSchema = Schema;
