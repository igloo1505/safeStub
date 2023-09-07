import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    uniqueKey: z.literal(true).optional(),
    street: z.literal(true).optional(),
    zip: z.literal(true).optional(),
    city: z.literal(true).optional(),
    cityId: z.literal(true).optional(),
    state: z.literal(true).optional(),
    lat: z.literal(true).optional(),
    long: z.literal(true).optional(),
    country: z.literal(true).optional(),
    userId: z.literal(true).optional(),
  })
  .strict();

export const LocationMaxAggregateInputObjectSchema = Schema;
