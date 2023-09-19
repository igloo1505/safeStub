import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    eventId: z.literal(true).optional(),
    ticketGroupId: z.literal(true).optional(),
  })
  .strict();

export const TicketSumAggregateInputObjectSchema = Schema;
