import { z } from 'zod';
import { LogoCreateManyTeamInputObjectSchema } from './LogoCreateManyTeamInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LogoCreateManyTeamInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => LogoCreateManyTeamInputObjectSchema),
      z.lazy(() => LogoCreateManyTeamInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const LogoCreateManyTeamInputEnvelopeObjectSchema = Schema;
