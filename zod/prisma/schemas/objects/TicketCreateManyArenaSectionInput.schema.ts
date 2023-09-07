import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketCreateManyArenaSectionInput> = z
  .object({
    id: z.number().optional(),
    eventId: z.number().optional().nullable(),
    ticketGroupId: z.number().optional().nullable(),
  })
  .strict();

export const TicketCreateManyArenaSectionInputObjectSchema = Schema;
