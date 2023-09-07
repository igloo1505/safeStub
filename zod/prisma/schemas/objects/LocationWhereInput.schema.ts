import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumUSSTATENullableFilterObjectSchema } from './EnumUSSTATENullableFilter.schema';
import { USSTATESchema } from '../enums/USSTATE.schema';
import { FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { EnumCountryFilterObjectSchema } from './EnumCountryFilter.schema';
import { CountrySchema } from '../enums/Country.schema';
import { ArenaListRelationFilterObjectSchema } from './ArenaListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => LocationWhereInputObjectSchema),
        z.lazy(() => LocationWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => LocationWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => LocationWhereInputObjectSchema),
        z.lazy(() => LocationWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    uniqueKey: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    street: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    zip: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    city: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    cityId: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    state: z
      .union([
        z.lazy(() => EnumUSSTATENullableFilterObjectSchema),
        z.lazy(() => USSTATESchema),
      ])
      .optional()
      .nullable(),
    lat: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    long: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    country: z
      .union([
        z.lazy(() => EnumCountryFilterObjectSchema),
        z.lazy(() => CountrySchema),
      ])
      .optional(),
    userId: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    arena: z.lazy(() => ArenaListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const LocationWhereInputObjectSchema = Schema;
