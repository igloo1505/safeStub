import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketUncheckedCreateWithoutEventInput> = z
  .object({
    id: z.number().optional(),
    ticketGroupId: z.number().optional().nullable(),
    arenaSectionId: z.number(),
  })
  .strict();

export const TicketUncheckedCreateWithoutEventInputObjectSchema = Schema;
