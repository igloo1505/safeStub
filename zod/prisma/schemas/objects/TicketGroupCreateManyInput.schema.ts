import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupCreateManyInput> = z
  .object({
    id: z.number().optional(),
    eventId: z.number().optional().nullable(),
    confirmationId: z.string(),
    sellerId: z.string(),
    buyerId: z.string().optional().nullable(),
  })
  .strict();

export const TicketGroupCreateManyInputObjectSchema = Schema;
