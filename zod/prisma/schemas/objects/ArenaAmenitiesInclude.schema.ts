import { z } from 'zod';
import { ArenaFindManySchema } from '../findManyArena.schema';
import { EventFindManySchema } from '../findManyEvent.schema';
import { ArenaAmenitiesCountOutputTypeArgsObjectSchema } from './ArenaAmenitiesCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaAmenitiesInclude> = z
  .object({
    Arena: z.union([z.boolean(), z.lazy(() => ArenaFindManySchema)]).optional(),
    Event: z.union([z.boolean(), z.lazy(() => EventFindManySchema)]).optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => ArenaAmenitiesCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ArenaAmenitiesIncludeObjectSchema = Schema;
