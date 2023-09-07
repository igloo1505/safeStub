import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    arenaAmenitiesId: z.literal(true).optional(),
    locationId: z.literal(true).optional(),
    sectionImageId: z.literal(true).optional(),
  })
  .strict();

export const ArenaAvgAggregateInputObjectSchema = Schema;
