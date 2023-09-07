import { z } from 'zod';
import { EventCreateManyAmenitiesInputObjectSchema } from './EventCreateManyAmenitiesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventCreateManyAmenitiesInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => EventCreateManyAmenitiesInputObjectSchema),
      z.lazy(() => EventCreateManyAmenitiesInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const EventCreateManyAmenitiesInputEnvelopeObjectSchema = Schema;
