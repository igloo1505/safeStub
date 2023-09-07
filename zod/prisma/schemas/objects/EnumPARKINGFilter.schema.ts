import { z } from 'zod';
import { PARKINGSchema } from '../enums/PARKING.schema';
import { NestedEnumPARKINGFilterObjectSchema } from './NestedEnumPARKINGFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumPARKINGFilter> = z
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
        z.lazy(() => NestedEnumPARKINGFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const EnumPARKINGFilterObjectSchema = Schema;
