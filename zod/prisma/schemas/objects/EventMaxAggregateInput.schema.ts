import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    category: z.literal(true).optional(),
    arenaId: z.literal(true).optional(),
    amenitiesId: z.literal(true).optional(),
    date: z.literal(true).optional(),
    title: z.literal(true).optional(),
    description: z.literal(true).optional(),
  })
  .strict();

export const EventMaxAggregateInputObjectSchema = Schema;
