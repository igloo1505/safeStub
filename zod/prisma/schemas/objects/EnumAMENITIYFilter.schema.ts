import { z } from 'zod';
import { AMENITIYSchema } from '../enums/AMENITIY.schema';
import { NestedEnumAMENITIYFilterObjectSchema } from './NestedEnumAMENITIYFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumAMENITIYFilter> = z
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
        z.lazy(() => NestedEnumAMENITIYFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const EnumAMENITIYFilterObjectSchema = Schema;
