import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupUncheckedCreateWithoutTicketsInput> =
  z
    .object({
      id: z.number().optional(),
      eventId: z.number().optional().nullable(),
      seatedTogether: z.boolean(),
    })
    .strict();

export const TicketGroupUncheckedCreateWithoutTicketsInputObjectSchema = Schema;
