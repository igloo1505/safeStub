import { z } from 'zod';
import { TeamCreateManyEventInputObjectSchema } from './TeamCreateManyEventInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamCreateManyEventInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => TeamCreateManyEventInputObjectSchema),
      z.lazy(() => TeamCreateManyEventInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const TeamCreateManyEventInputEnvelopeObjectSchema = Schema;
