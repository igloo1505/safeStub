import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { USSTATESchema } from '../enums/USSTATE.schema';
import { NullableEnumUSSTATEFieldUpdateOperationsInputObjectSchema } from './NullableEnumUSSTATEFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { CountrySchema } from '../enums/Country.schema';
import { EnumCountryFieldUpdateOperationsInputObjectSchema } from './EnumCountryFieldUpdateOperationsInput.schema';
import { ArenaUpdateManyWithoutLocationNestedInputObjectSchema } from './ArenaUpdateManyWithoutLocationNestedInput.schema';
import { PersonalDetailsUpdateOneWithoutLocationNestedInputObjectSchema } from './PersonalDetailsUpdateOneWithoutLocationNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationUpdateInput> = z
  .object({
    uniqueKey: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    street: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    zip: z
      .union([
        z.number(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    city: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    cityId: z
      .union([
        z.number(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    state: z
      .union([
        z.lazy(() => USSTATESchema),
        z.lazy(() => NullableEnumUSSTATEFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    lat: z
      .union([
        z.number(),
        z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    long: z
      .union([
        z.number(),
        z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    country: z
      .union([
        z.lazy(() => CountrySchema),
        z.lazy(() => EnumCountryFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    arena: z
      .lazy(() => ArenaUpdateManyWithoutLocationNestedInputObjectSchema)
      .optional(),
    personalDetails: z
      .lazy(
        () => PersonalDetailsUpdateOneWithoutLocationNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const LocationUpdateInputObjectSchema = Schema;
