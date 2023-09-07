import { z } from 'zod';
import { VERIFICATIONSTATUSSchema } from '../enums/VERIFICATIONSTATUS.schema';
import { NestedEnumVERIFICATIONSTATUSWithAggregatesFilterObjectSchema } from './NestedEnumVERIFICATIONSTATUSWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumVERIFICATIONSTATUSFilterObjectSchema } from './NestedEnumVERIFICATIONSTATUSFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumVERIFICATIONSTATUSWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => VERIFICATIONSTATUSSchema).optional(),
    in: z
      .union([
        z.lazy(() => VERIFICATIONSTATUSSchema).array(),
        z.lazy(() => VERIFICATIONSTATUSSchema),
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => VERIFICATIONSTATUSSchema).array(),
        z.lazy(() => VERIFICATIONSTATUSSchema),
      ])
      .optional(),
    not: z
      .union([
        z.lazy(() => VERIFICATIONSTATUSSchema),
        z.lazy(
          () => NestedEnumVERIFICATIONSTATUSWithAggregatesFilterObjectSchema,
        ),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z
      .lazy(() => NestedEnumVERIFICATIONSTATUSFilterObjectSchema)
      .optional(),
    _max: z
      .lazy(() => NestedEnumVERIFICATIONSTATUSFilterObjectSchema)
      .optional(),
  })
  .strict();

export const EnumVERIFICATIONSTATUSWithAggregatesFilterObjectSchema = Schema;
