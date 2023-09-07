import { z } from 'zod';
import { PARKINGSchema } from '../enums/PARKING.schema';
import { NestedEnumPARKINGWithAggregatesFilterObjectSchema } from './NestedEnumPARKINGWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumPARKINGFilterObjectSchema } from './NestedEnumPARKINGFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumPARKINGWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => PARKINGSchema).optional(),
    in: z
      .union([z.lazy(() => PARKINGSchema).array(), z.lazy(() => PARKINGSchema)])
      .optional(),
    notIn: z
      .union([z.lazy(() => PARKINGSchema).array(), z.lazy(() => PARKINGSchema)])
      .optional(),
    not: z
      .union([
        z.lazy(() => PARKINGSchema),
        z.lazy(() => NestedEnumPARKINGWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumPARKINGFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumPARKINGFilterObjectSchema).optional(),
  })
  .strict();

export const EnumPARKINGWithAggregatesFilterObjectSchema = Schema;
