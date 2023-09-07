import { z } from 'zod';
import { CATEGORYSchema } from '../enums/CATEGORY.schema';
import { NestedEnumCATEGORYFilterObjectSchema } from './NestedEnumCATEGORYFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumCATEGORYFilter> = z
  .object({
    equals: z.lazy(() => CATEGORYSchema).optional(),
    in: z
      .union([
        z.lazy(() => CATEGORYSchema).array(),
        z.lazy(() => CATEGORYSchema),
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => CATEGORYSchema).array(),
        z.lazy(() => CATEGORYSchema),
      ])
      .optional(),
    not: z
      .union([
        z.lazy(() => CATEGORYSchema),
        z.lazy(() => NestedEnumCATEGORYFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const EnumCATEGORYFilterObjectSchema = Schema;
