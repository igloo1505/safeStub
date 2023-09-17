import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupCreateManyEventInput> = z
  .object({
    id: z.number().optional(),
    arenaSectionId: z.number(),
  })
  .strict();

export const TicketGroupCreateManyEventInputObjectSchema = Schema;
