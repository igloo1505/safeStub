import { z } from 'zod';
import { CountrySchema } from '../enums/Country.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumCountryFilterObjectSchema } from './NestedEnumCountryFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumCountryWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => CountrySchema).optional(),
    in: z
      .union([z.lazy(() => CountrySchema).array(), z.lazy(() => CountrySchema)])
      .optional(),
    notIn: z
      .union([z.lazy(() => CountrySchema).array(), z.lazy(() => CountrySchema)])
      .optional(),
    not: z
      .union([
        z.lazy(() => CountrySchema),
        z.lazy(() => NestedEnumCountryWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumCountryFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumCountryFilterObjectSchema).optional(),
  })
  .strict();

export const NestedEnumCountryWithAggregatesFilterObjectSchema = Schema;
