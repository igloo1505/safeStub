import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    eventId: z.number().optional().nullable(),
    ticketGroupId: z.number().optional().nullable(),
    arenaSectionId: z.number(),
  })
  .strict();

export const TicketUncheckedCreateInputObjectSchema = Schema;
