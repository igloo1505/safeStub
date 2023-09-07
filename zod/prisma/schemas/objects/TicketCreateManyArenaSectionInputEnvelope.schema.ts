import { z } from 'zod';
import { TicketCreateManyArenaSectionInputObjectSchema } from './TicketCreateManyArenaSectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketCreateManyArenaSectionInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => TicketCreateManyArenaSectionInputObjectSchema),
      z.lazy(() => TicketCreateManyArenaSectionInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const TicketCreateManyArenaSectionInputEnvelopeObjectSchema = Schema;
