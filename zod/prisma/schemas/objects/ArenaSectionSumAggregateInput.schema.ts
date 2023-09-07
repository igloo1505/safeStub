import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaSectionSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    arenaId: z.literal(true).optional(),
  })
  .strict();

export const ArenaSectionSumAggregateInputObjectSchema = Schema;
