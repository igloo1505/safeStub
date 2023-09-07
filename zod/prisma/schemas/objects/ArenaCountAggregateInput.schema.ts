import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    uniqueKey: z.literal(true).optional(),
    name: z.literal(true).optional(),
    arenaAmenitiesId: z.literal(true).optional(),
    locationId: z.literal(true).optional(),
    sectionImageId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const ArenaCountAggregateInputObjectSchema = Schema;
