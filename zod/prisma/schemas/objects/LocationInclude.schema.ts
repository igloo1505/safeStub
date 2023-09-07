import { z } from 'zod';
import { ArenaFindManySchema } from '../findManyArena.schema';
import { PersonalDetailsArgsObjectSchema } from './PersonalDetailsArgs.schema';
import { LocationCountOutputTypeArgsObjectSchema } from './LocationCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationInclude> = z
  .object({
    arena: z.union([z.boolean(), z.lazy(() => ArenaFindManySchema)]).optional(),
    personalDetails: z
      .union([z.boolean(), z.lazy(() => PersonalDetailsArgsObjectSchema)])
      .optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => LocationCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const LocationIncludeObjectSchema = Schema;
