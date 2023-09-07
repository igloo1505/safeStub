import { z } from 'zod';
import { TicketCreateManyTicketGroupInputObjectSchema } from './TicketCreateManyTicketGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketCreateManyTicketGroupInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => TicketCreateManyTicketGroupInputObjectSchema),
      z.lazy(() => TicketCreateManyTicketGroupInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const TicketCreateManyTicketGroupInputEnvelopeObjectSchema = Schema;
