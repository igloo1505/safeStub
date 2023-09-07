import { z } from 'zod';
import { ArenaCreateManyAmenitiesInputObjectSchema } from './ArenaCreateManyAmenitiesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaCreateManyAmenitiesInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ArenaCreateManyAmenitiesInputObjectSchema),
      z.lazy(() => ArenaCreateManyAmenitiesInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ArenaCreateManyAmenitiesInputEnvelopeObjectSchema = Schema;
