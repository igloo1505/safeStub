import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    eventId: z.literal(true).optional(),
    ticketGroupId: z.literal(true).optional(),
    section: z.literal(true).optional(),
    row: z.literal(true).optional(),
    seat: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const TicketCountAggregateInputObjectSchema = Schema;
