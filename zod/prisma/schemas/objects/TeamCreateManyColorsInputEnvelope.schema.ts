import { z } from 'zod';
import { TeamCreateManyColorsInputObjectSchema } from './TeamCreateManyColorsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamCreateManyColorsInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => TeamCreateManyColorsInputObjectSchema),
      z.lazy(() => TeamCreateManyColorsInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const TeamCreateManyColorsInputEnvelopeObjectSchema = Schema;
