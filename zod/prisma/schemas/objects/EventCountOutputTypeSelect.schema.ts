import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventCountOutputTypeSelect> = z
  .object({
    tickets: z.boolean().optional(),
    ticketGroups: z.boolean().optional(),
    tags: z.boolean().optional(),
    participants: z.boolean().optional(),
    cxternalTicketSource: z.boolean().optional(),
  })
  .strict();

export const EventCountOutputTypeSelectObjectSchema = Schema;
