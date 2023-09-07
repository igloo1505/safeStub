import { z } from 'zod';
import { USSTATESchema } from '../enums/USSTATE.schema';
import { CountrySchema } from '../enums/Country.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationCreateWithoutArenaInput> = z
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
    userId: z.number().optional().nullable(),
  })
  .strict();

export const LocationCreateWithoutArenaInputObjectSchema = Schema;
