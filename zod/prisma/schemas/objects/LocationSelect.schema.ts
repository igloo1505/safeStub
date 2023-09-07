import { z } from 'zod';
import { ArenaFindManySchema } from '../findManyArena.schema';
import { PersonalDetailsArgsObjectSchema } from './PersonalDetailsArgs.schema';
import { LocationCountOutputTypeArgsObjectSchema } from './LocationCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationSelect> = z
  .object({
    id: z.boolean().optional(),
    uniqueKey: z.boolean().optional(),
    street: z.boolean().optional(),
    zip: z.boolean().optional(),
    city: z.boolean().optional(),
    cityId: z.boolean().optional(),
    state: z.boolean().optional(),
    lat: z.boolean().optional(),
    long: z.boolean().optional(),
    country: z.boolean().optional(),
    arena: z.union([z.boolean(), z.lazy(() => ArenaFindManySchema)]).optional(),
    personalDetails: z
      .union([z.boolean(), z.lazy(() => PersonalDetailsArgsObjectSchema)])
      .optional(),
    userId: z.boolean().optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => LocationCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const LocationSelectObjectSchema = Schema;
