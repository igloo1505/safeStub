import { z } from 'zod';
import { EventCreateManyArenaInputObjectSchema } from './EventCreateManyArenaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventCreateManyArenaInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => EventCreateManyArenaInputObjectSchema),
      z.lazy(() => EventCreateManyArenaInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const EventCreateManyArenaInputEnvelopeObjectSchema = Schema;
