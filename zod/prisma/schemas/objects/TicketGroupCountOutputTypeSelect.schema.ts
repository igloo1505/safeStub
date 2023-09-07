import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupCountOutputTypeSelect> = z
  .object({
    tickets: z.boolean().optional(),
  })
  .strict();

export const TicketGroupCountOutputTypeSelectObjectSchema = Schema;
