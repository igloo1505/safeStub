import { z } from 'zod';
import { AMENITIYSchema } from '../enums/AMENITIY.schema';
import { NestedEnumAMENITIYWithAggregatesFilterObjectSchema } from './NestedEnumAMENITIYWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumAMENITIYFilterObjectSchema } from './NestedEnumAMENITIYFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumAMENITIYWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => AMENITIYSchema).optional(),
    in: z
      .union([
        z.lazy(() => AMENITIYSchema).array(),
        z.lazy(() => AMENITIYSchema),
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => AMENITIYSchema).array(),
        z.lazy(() => AMENITIYSchema),
      ])
      .optional(),
    not: z
      .union([
        z.lazy(() => AMENITIYSchema),
        z.lazy(() => NestedEnumAMENITIYWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumAMENITIYFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumAMENITIYFilterObjectSchema).optional(),
  })
  .strict();

export const EnumAMENITIYWithAggregatesFilterObjectSchema = Schema;
