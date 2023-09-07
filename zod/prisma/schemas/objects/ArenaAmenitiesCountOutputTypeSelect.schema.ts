import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaAmenitiesCountOutputTypeSelect> = z
  .object({
    Arena: z.boolean().optional(),
    Event: z.boolean().optional(),
  })
  .strict();

export const ArenaAmenitiesCountOutputTypeSelectObjectSchema = Schema;
