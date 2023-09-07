import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaCreateManyAmenitiesInput> = z
  .object({
    id: z.number().optional(),
    uniqueKey: z.string().optional().nullable(),
    name: z.string(),
    locationId: z.number(),
    sectionImageId: z.number().optional().nullable(),
  })
  .strict();

export const ArenaCreateManyAmenitiesInputObjectSchema = Schema;
