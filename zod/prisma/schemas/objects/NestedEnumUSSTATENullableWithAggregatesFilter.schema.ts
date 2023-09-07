import { z } from 'zod';
import { USSTATESchema } from '../enums/USSTATE.schema';
import { NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumUSSTATENullableFilterObjectSchema } from './NestedEnumUSSTATENullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumUSSTATENullableWithAggregatesFilter> =
  z
    .object({
      equals: z
        .lazy(() => USSTATESchema)
        .optional()
        .nullable(),
      in: z
        .union([
          z.lazy(() => USSTATESchema).array(),
          z.lazy(() => USSTATESchema),
        ])
        .optional()
        .nullable(),
      notIn: z
        .union([
          z.lazy(() => USSTATESchema).array(),
          z.lazy(() => USSTATESchema),
        ])
        .optional()
        .nullable(),
      not: z
        .union([
          z.lazy(() => USSTATESchema),
          z.lazy(
            () => NestedEnumUSSTATENullableWithAggregatesFilterObjectSchema,
          ),
        ])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
      _min: z
        .lazy(() => NestedEnumUSSTATENullableFilterObjectSchema)
        .optional(),
      _max: z
        .lazy(() => NestedEnumUSSTATENullableFilterObjectSchema)
        .optional(),
    })
    .strict();

export const NestedEnumUSSTATENullableWithAggregatesFilterObjectSchema = Schema;
