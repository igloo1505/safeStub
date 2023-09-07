import { z } from 'zod';
import { NFL_DivisionSchema } from '../enums/NFL_Division.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumNFL_DivisionNullableFilter> = z
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

export const NestedEnumNFL_DivisionNullableFilterObjectSchema = Schema;
