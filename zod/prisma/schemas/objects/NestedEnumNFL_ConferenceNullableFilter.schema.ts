import { z } from 'zod';
import { NFL_ConferenceSchema } from '../enums/NFL_Conference.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumNFL_ConferenceNullableFilter> = z
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
        z.lazy(() => NestedEnumNFL_ConferenceNullableFilterObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const NestedEnumNFL_ConferenceNullableFilterObjectSchema = Schema;
