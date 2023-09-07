import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaAmenitiesMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    indoor: z.literal(true).optional(),
    covered: z.literal(true).optional(),
    outdoor: z.literal(true).optional(),
    food: z.literal(true).optional(),
    alcohol: z.literal(true).optional(),
    parking: z.literal(true).optional(),
    shuttleAvailable: z.literal(true).optional(),
  })
  .strict();

export const ArenaAmenitiesMaxAggregateInputObjectSchema = Schema;
