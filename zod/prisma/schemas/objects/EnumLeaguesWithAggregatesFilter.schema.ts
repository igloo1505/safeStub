import { z } from 'zod';
import { LeaguesSchema } from '../enums/Leagues.schema';
import { NestedEnumLeaguesWithAggregatesFilterObjectSchema } from './NestedEnumLeaguesWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumLeaguesFilterObjectSchema } from './NestedEnumLeaguesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumLeaguesWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => LeaguesSchema).optional(),
    in: z
      .union([z.lazy(() => LeaguesSchema).array(), z.lazy(() => LeaguesSchema)])
      .optional(),
    notIn: z
      .union([z.lazy(() => LeaguesSchema).array(), z.lazy(() => LeaguesSchema)])
      .optional(),
    not: z
      .union([
        z.lazy(() => LeaguesSchema),
        z.lazy(() => NestedEnumLeaguesWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumLeaguesFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumLeaguesFilterObjectSchema).optional(),
  })
  .strict();

export const EnumLeaguesWithAggregatesFilterObjectSchema = Schema;
