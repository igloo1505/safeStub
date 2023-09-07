import { z } from 'zod';
import { FaqCategorySchema } from '../enums/FaqCategory.schema';
import { NestedEnumFaqCategoryFilterObjectSchema } from './NestedEnumFaqCategoryFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumFaqCategoryFilter> = z
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
        z.lazy(() => NestedEnumFaqCategoryFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const EnumFaqCategoryFilterObjectSchema = Schema;
