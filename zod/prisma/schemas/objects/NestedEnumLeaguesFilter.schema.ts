import { z } from 'zod';
import { LeaguesSchema } from '../enums/Leagues.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumLeaguesFilter> = z
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
        z.lazy(() => NestedEnumLeaguesFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const NestedEnumLeaguesFilterObjectSchema = Schema;
