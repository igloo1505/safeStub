import { z } from 'zod';
import { NFL_DivisionSchema } from '../enums/NFL_Division.schema';
import { NestedEnumNFL_DivisionNullableFilterObjectSchema } from './NestedEnumNFL_DivisionNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumNFL_DivisionNullableFilter> = z
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
        z.lazy(() => NestedEnumNFL_DivisionNullableFilterObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const EnumNFL_DivisionNullableFilterObjectSchema = Schema;
