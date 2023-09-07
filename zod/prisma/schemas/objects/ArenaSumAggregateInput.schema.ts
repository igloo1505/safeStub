import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    arenaAmenitiesId: z.literal(true).optional(),
    locationId: z.literal(true).optional(),
    sectionImageId: z.literal(true).optional(),
  })
  .strict();

export const ArenaSumAggregateInputObjectSchema = Schema;
