import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketUncheckedCreateWithoutEventInput> = z
  .object({
    id: z.number().optional(),
    ticketGroupId: z.number().optional().nullable(),
    section: z.string(),
    row: z.string(),
    seat: z.string(),
  })
  .strict();

export const TicketUncheckedCreateWithoutEventInputObjectSchema = Schema;
