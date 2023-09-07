import { z } from 'zod';
import { CountrySchema } from '../enums/Country.schema';
import { NestedEnumCountryFilterObjectSchema } from './NestedEnumCountryFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumCountryFilter> = z
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
        z.lazy(() => NestedEnumCountryFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const EnumCountryFilterObjectSchema = Schema;
