import { z } from 'zod';
import { USSTATESchema } from '../enums/USSTATE.schema';
import { NestedEnumUSSTATENullableFilterObjectSchema } from './NestedEnumUSSTATENullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumUSSTATENullableFilter> = z
  .object({
    equals: z
      .lazy(() => USSTATESchema)
      .optional()
      .nullable(),
    in: z
      .union([z.lazy(() => USSTATESchema).array(), z.lazy(() => USSTATESchema)])
      .optional()
      .nullable(),
    notIn: z
      .union([z.lazy(() => USSTATESchema).array(), z.lazy(() => USSTATESchema)])
      .optional()
      .nullable(),
    not: z
      .union([
        z.lazy(() => USSTATESchema),
        z.lazy(() => NestedEnumUSSTATENullableFilterObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const EnumUSSTATENullableFilterObjectSchema = Schema;
