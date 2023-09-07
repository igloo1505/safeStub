import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    arenaId: z.literal(true).optional(),
    amenitiesId: z.literal(true).optional(),
  })
  .strict();

export const EventSumAggregateInputObjectSchema = Schema;
