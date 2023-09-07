import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaCreateManyInput> = z
  .object({
    id: z.number().optional(),
    uniqueKey: z.string().optional().nullable(),
    name: z.string(),
    arenaAmenitiesId: z.number(),
    locationId: z.number(),
    sectionImageId: z.number().optional().nullable(),
  })
  .strict();

export const ArenaCreateManyInputObjectSchema = Schema;
