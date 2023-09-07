import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    eventId: z.literal(true).optional(),
    seatedTogether: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const TicketGroupCountAggregateInputObjectSchema = Schema;
