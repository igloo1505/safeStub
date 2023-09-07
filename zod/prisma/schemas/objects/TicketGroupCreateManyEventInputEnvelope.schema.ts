import { z } from 'zod';
import { TicketGroupCreateManyEventInputObjectSchema } from './TicketGroupCreateManyEventInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupCreateManyEventInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => TicketGroupCreateManyEventInputObjectSchema),
      z.lazy(() => TicketGroupCreateManyEventInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const TicketGroupCreateManyEventInputEnvelopeObjectSchema = Schema;
