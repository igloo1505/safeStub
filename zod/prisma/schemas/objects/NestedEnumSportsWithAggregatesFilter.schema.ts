import { z } from 'zod';
import { SportsSchema } from '../enums/Sports.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumSportsFilterObjectSchema } from './NestedEnumSportsFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumSportsWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => SportsSchema).optional(),
    in: z
      .union([z.lazy(() => SportsSchema).array(), z.lazy(() => SportsSchema)])
      .optional(),
    notIn: z
      .union([z.lazy(() => SportsSchema).array(), z.lazy(() => SportsSchema)])
      .optional(),
    not: z
      .union([
        z.lazy(() => SportsSchema),
        z.lazy(() => NestedEnumSportsWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumSportsFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumSportsFilterObjectSchema).optional(),
  })
  .strict();

export const NestedEnumSportsWithAggregatesFilterObjectSchema = Schema;
