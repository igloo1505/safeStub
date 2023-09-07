import { z } from 'zod';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumUSSTATENullableWithAggregatesFilterObjectSchema } from './EnumUSSTATENullableWithAggregatesFilter.schema';
import { USSTATESchema } from '../enums/USSTATE.schema';
import { FloatNullableWithAggregatesFilterObjectSchema } from './FloatNullableWithAggregatesFilter.schema';
import { EnumCountryWithAggregatesFilterObjectSchema } from './EnumCountryWithAggregatesFilter.schema';
import { CountrySchema } from '../enums/Country.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => LocationScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => LocationScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => LocationScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => LocationScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => LocationScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    uniqueKey: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    street: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    zip: z
      .union([
        z.lazy(() => IntNullableWithAggregatesFilterObjectSchema),
        z.number(),
      ])
      .optional()
      .nullable(),
    city: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    cityId: z
      .union([
        z.lazy(() => IntNullableWithAggregatesFilterObjectSchema),
        z.number(),
      ])
      .optional()
      .nullable(),
    state: z
      .union([
        z.lazy(() => EnumUSSTATENullableWithAggregatesFilterObjectSchema),
        z.lazy(() => USSTATESchema),
      ])
      .optional()
      .nullable(),
    lat: z
      .union([
        z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema),
        z.number(),
      ])
      .optional()
      .nullable(),
    long: z
      .union([
        z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema),
        z.number(),
      ])
      .optional()
      .nullable(),
    country: z
      .union([
        z.lazy(() => EnumCountryWithAggregatesFilterObjectSchema),
        z.lazy(() => CountrySchema),
      ])
      .optional(),
    userId: z
      .union([
        z.lazy(() => IntNullableWithAggregatesFilterObjectSchema),
        z.number(),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const LocationScalarWhereWithAggregatesInputObjectSchema = Schema;
