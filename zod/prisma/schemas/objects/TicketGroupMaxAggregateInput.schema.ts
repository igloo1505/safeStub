import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    eventId: z.literal(true).optional(),
    arenaSectionId: z.literal(true).optional(),
  })
  .strict();

export const TicketGroupMaxAggregateInputObjectSchema = Schema;
