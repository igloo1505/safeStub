import { z } from 'zod';
import { USSTATESchema } from '../enums/USSTATE.schema';
import { CountrySchema } from '../enums/Country.schema';
import { ArenaCreateNestedManyWithoutLocationInputObjectSchema } from './ArenaCreateNestedManyWithoutLocationInput.schema';
import { PersonalDetailsCreateNestedOneWithoutLocationInputObjectSchema } from './PersonalDetailsCreateNestedOneWithoutLocationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationCreateInput> = z
  .object({
    uniqueKey: z.string().optional().nullable(),
    street: z.string().optional().nullable(),
    zip: z.number().optional().nullable(),
    city: z.string(),
    cityId: z.number().optional().nullable(),
    state: z
      .lazy(() => USSTATESchema)
      .optional()
      .nullable(),
    lat: z.number().optional().nullable(),
    long: z.number().optional().nullable(),
    country: z.lazy(() => CountrySchema).optional(),
    arena: z
      .lazy(() => ArenaCreateNestedManyWithoutLocationInputObjectSchema)
      .optional(),
    personalDetails: z
      .lazy(
        () => PersonalDetailsCreateNestedOneWithoutLocationInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const LocationCreateInputObjectSchema = Schema;
