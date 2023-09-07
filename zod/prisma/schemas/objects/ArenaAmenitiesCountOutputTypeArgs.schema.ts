import { z } from 'zod';
import { ArenaAmenitiesCountOutputTypeSelectObjectSchema } from './ArenaAmenitiesCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaAmenitiesCountOutputTypeArgs> = z
  .object({
    select: z
      .lazy(() => ArenaAmenitiesCountOutputTypeSelectObjectSchema)
      .optional(),
  })
  .strict();

export const ArenaAmenitiesCountOutputTypeArgsObjectSchema = Schema;
