import { z } from 'zod';
import { ArenaFindManySchema } from '../findManyArena.schema';
import { EventFindManySchema } from '../findManyEvent.schema';
import { ArenaAmenitiesCountOutputTypeArgsObjectSchema } from './ArenaAmenitiesCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaAmenitiesSelect> = z
  .object({
    id: z.boolean().optional(),
    Arena: z.union([z.boolean(), z.lazy(() => ArenaFindManySchema)]).optional(),
    indoor: z.boolean().optional(),
    covered: z.boolean().optional(),
    outdoor: z.boolean().optional(),
    food: z.boolean().optional(),
    alcohol: z.boolean().optional(),
    parking: z.boolean().optional(),
    shuttleAvailable: z.boolean().optional(),
    Event: z.union([z.boolean(), z.lazy(() => EventFindManySchema)]).optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => ArenaAmenitiesCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ArenaAmenitiesSelectObjectSchema = Schema;
