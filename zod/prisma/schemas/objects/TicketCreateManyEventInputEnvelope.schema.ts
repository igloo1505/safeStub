import { z } from 'zod';
import { TicketCreateManyEventInputObjectSchema } from './TicketCreateManyEventInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketCreateManyEventInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => TicketCreateManyEventInputObjectSchema),
      z.lazy(() => TicketCreateManyEventInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const TicketCreateManyEventInputEnvelopeObjectSchema = Schema;
