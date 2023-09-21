import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    eventId: z.literal(true).optional(),
    confirmationId: z.literal(true).optional(),
    sellerId: z.literal(true).optional(),
    buyerId: z.literal(true).optional(),
  })
  .strict();

export const TicketGroupMaxAggregateInputObjectSchema = Schema;
