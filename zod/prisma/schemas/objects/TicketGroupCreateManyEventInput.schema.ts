import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupCreateManyEventInput> = z
  .object({
    id: z.number().optional(),
    confirmationId: z.string(),
    sellerId: z.string(),
    buyerId: z.string().optional().nullable(),
  })
  .strict();

export const TicketGroupCreateManyEventInputObjectSchema = Schema;
