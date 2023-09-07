import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaCreateManySectionImageInput> = z
  .object({
    id: z.number().optional(),
    uniqueKey: z.string().optional().nullable(),
    name: z.string(),
    arenaAmenitiesId: z.number(),
    locationId: z.number(),
  })
  .strict();

export const ArenaCreateManySectionImageInputObjectSchema = Schema;
