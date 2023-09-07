import { z } from 'zod';
import { ArenaCreateManySectionImageInputObjectSchema } from './ArenaCreateManySectionImageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaCreateManySectionImageInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ArenaCreateManySectionImageInputObjectSchema),
      z.lazy(() => ArenaCreateManySectionImageInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ArenaCreateManySectionImageInputEnvelopeObjectSchema = Schema;
