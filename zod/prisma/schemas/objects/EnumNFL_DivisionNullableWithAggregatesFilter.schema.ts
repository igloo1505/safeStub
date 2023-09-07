import { z } from 'zod';
import { NFL_DivisionSchema } from '../enums/NFL_Division.schema';
import { NestedEnumNFL_DivisionNullableWithAggregatesFilterObjectSchema } from './NestedEnumNFL_DivisionNullableWithAggregatesFilter.schema';
import { NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumNFL_DivisionNullableFilterObjectSchema } from './NestedEnumNFL_DivisionNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumNFL_DivisionNullableWithAggregatesFilter> = z
  .object({
    equals: z
      .lazy(() => NFL_DivisionSchema)
      .optional()
      .nullable(),
    in: z
      .union([
        z.lazy(() => NFL_DivisionSchema).array(),
        z.lazy(() => NFL_DivisionSchema),
      ])
      .optional()
      .nullable(),
    notIn: z
      .union([
        z.lazy(() => NFL_DivisionSchema).array(),
        z.lazy(() => NFL_DivisionSchema),
      ])
      .optional()
      .nullable(),
    not: z
      .union([
        z.lazy(() => NFL_DivisionSchema),
        z.lazy(
          () => NestedEnumNFL_DivisionNullableWithAggregatesFilterObjectSchema,
        ),
      ])
      .optional()
      .nullable(),
    _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
    _min: z
      .lazy(() => NestedEnumNFL_DivisionNullableFilterObjectSchema)
      .optional(),
    _max: z
      .lazy(() => NestedEnumNFL_DivisionNullableFilterObjectSchema)
      .optional(),
  })
  .strict();

export const EnumNFL_DivisionNullableWithAggregatesFilterObjectSchema = Schema;
