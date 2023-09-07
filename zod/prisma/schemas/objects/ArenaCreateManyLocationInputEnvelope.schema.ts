import { z } from 'zod';
import { ArenaCreateManyLocationInputObjectSchema } from './ArenaCreateManyLocationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaCreateManyLocationInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ArenaCreateManyLocationInputObjectSchema),
      z.lazy(() => ArenaCreateManyLocationInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ArenaCreateManyLocationInputEnvelopeObjectSchema = Schema;
