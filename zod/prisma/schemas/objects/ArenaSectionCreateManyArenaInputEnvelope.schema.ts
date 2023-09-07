import { z } from 'zod';
import { ArenaSectionCreateManyArenaInputObjectSchema } from './ArenaSectionCreateManyArenaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaSectionCreateManyArenaInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ArenaSectionCreateManyArenaInputObjectSchema),
      z.lazy(() => ArenaSectionCreateManyArenaInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ArenaSectionCreateManyArenaInputEnvelopeObjectSchema = Schema;
