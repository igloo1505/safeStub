import { z } from 'zod';
import { TeamCreateManyHomeArenaInputObjectSchema } from './TeamCreateManyHomeArenaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamCreateManyHomeArenaInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => TeamCreateManyHomeArenaInputObjectSchema),
      z.lazy(() => TeamCreateManyHomeArenaInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const TeamCreateManyHomeArenaInputEnvelopeObjectSchema = Schema;
