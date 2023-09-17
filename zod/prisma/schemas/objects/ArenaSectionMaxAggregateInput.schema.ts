import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaSectionMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    arenaId: z.literal(true).optional(),
    section: z.literal(true).optional(),
    row: z.literal(true).optional(),
  })
  .strict();

export const ArenaSectionMaxAggregateInputObjectSchema = Schema;
