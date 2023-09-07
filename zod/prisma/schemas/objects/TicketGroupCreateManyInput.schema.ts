import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupCreateManyInput> = z
  .object({
    id: z.number().optional(),
    eventId: z.number().optional().nullable(),
    seatedTogether: z.boolean(),
  })
  .strict();

export const TicketGroupCreateManyInputObjectSchema = Schema;
