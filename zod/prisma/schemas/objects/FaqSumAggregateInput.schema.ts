import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaqSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    priority: z.literal(true).optional(),
  })
  .strict();

export const FaqSumAggregateInputObjectSchema = Schema;
