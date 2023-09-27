import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    eventId: z.number().optional().nullable(),
    ticketGroupId: z.number().optional().nullable(),
    section: z.string(),
    row: z.string(),
    seat: z.string(),
    sellerId: z.string(),
    buyerId: z.string().optional().nullable(),
    transactionId: z.number().optional().nullable(),
    ticketNumber: z.string().optional().nullable(),
  })
  .strict();

export const TicketUncheckedCreateInputObjectSchema = Schema;
