import { z } from 'zod';
import { FaqCategorySchema } from '../enums/FaqCategory.schema';
import { NestedEnumFaqCategoryWithAggregatesFilterObjectSchema } from './NestedEnumFaqCategoryWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumFaqCategoryFilterObjectSchema } from './NestedEnumFaqCategoryFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumFaqCategoryWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => FaqCategorySchema).optional(),
    in: z
      .union([
        z.lazy(() => FaqCategorySchema).array(),
        z.lazy(() => FaqCategorySchema),
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => FaqCategorySchema).array(),
        z.lazy(() => FaqCategorySchema),
      ])
      .optional(),
    not: z
      .union([
        z.lazy(() => FaqCategorySchema),
        z.lazy(() => NestedEnumFaqCategoryWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumFaqCategoryFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumFaqCategoryFilterObjectSchema).optional(),
  })
  .strict();

export const EnumFaqCategoryWithAggregatesFilterObjectSchema = Schema;
