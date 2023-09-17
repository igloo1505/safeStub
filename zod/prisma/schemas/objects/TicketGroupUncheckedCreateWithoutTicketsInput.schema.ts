import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupUncheckedCreateWithoutTicketsInput> =
  z
    .object({
      id: z.number().optional(),
      eventId: z.number().optional().nullable(),
      arenaSectionId: z.number(),
    })
    .strict();

export const TicketGroupUncheckedCreateWithoutTicketsInputObjectSchema = Schema;
