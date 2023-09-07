import { z } from 'zod';
import { NFL_ConferenceSchema } from '../enums/NFL_Conference.schema';
import { NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumNFL_ConferenceNullableFilterObjectSchema } from './NestedEnumNFL_ConferenceNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumNFL_ConferenceNullableWithAggregatesFilter> =
  z
    .object({
      equals: z
        .lazy(() => NFL_ConferenceSchema)
        .optional()
        .nullable(),
      in: z
        .union([
          z.lazy(() => NFL_ConferenceSchema).array(),
          z.lazy(() => NFL_ConferenceSchema),
        ])
        .optional()
        .nullable(),
      notIn: z
        .union([
          z.lazy(() => NFL_ConferenceSchema).array(),
          z.lazy(() => NFL_ConferenceSchema),
        ])
        .optional()
        .nullable(),
      not: z
        .union([
          z.lazy(() => NFL_ConferenceSchema),
          z.lazy(
            () =>
              NestedEnumNFL_ConferenceNullableWithAggregatesFilterObjectSchema,
          ),
        ])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
      _min: z
        .lazy(() => NestedEnumNFL_ConferenceNullableFilterObjectSchema)
        .optional(),
      _max: z
        .lazy(() => NestedEnumNFL_ConferenceNullableFilterObjectSchema)
        .optional(),
    })
    .strict();

export const NestedEnumNFL_ConferenceNullableWithAggregatesFilterObjectSchema =
  Schema;
