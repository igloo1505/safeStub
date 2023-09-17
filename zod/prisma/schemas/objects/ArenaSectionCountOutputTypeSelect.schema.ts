import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaSectionCountOutputTypeSelect> = z
  .object({
    Ticket: z.boolean().optional(),
    TicketGroup: z.boolean().optional(),
  })
  .strict();

export const ArenaSectionCountOutputTypeSelectObjectSchema = Schema;
