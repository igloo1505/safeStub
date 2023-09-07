import { z } from 'zod';
import { USSTATESchema } from '../enums/USSTATE.schema';
import { CountrySchema } from '../enums/Country.schema';
import { ArenaUncheckedCreateNestedManyWithoutLocationInputObjectSchema } from './ArenaUncheckedCreateNestedManyWithoutLocationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationUncheckedCreateWithoutPersonalDetailsInput> =
  z
    .object({
      id: z.number().optional(),
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
        .lazy(
          () => ArenaUncheckedCreateNestedManyWithoutLocationInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const LocationUncheckedCreateWithoutPersonalDetailsInputObjectSchema =
  Schema;
