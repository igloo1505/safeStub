import { z } from 'zod';
import { EventArgsObjectSchema } from './EventArgs.schema';
import { TicketFindManySchema } from '../findManyTicket.schema';
import { ArenaSectionArgsObjectSchema } from './ArenaSectionArgs.schema';
import { TicketGroupCountOutputTypeArgsObjectSchema } from './TicketGroupCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupSelect> = z
  .object({
    id: z.boolean().optional(),
    Event: z
      .union([z.boolean(), z.lazy(() => EventArgsObjectSchema)])
      .optional(),
    eventId: z.boolean().optional(),
    tickets: z
      .union([z.boolean(), z.lazy(() => TicketFindManySchema)])
      .optional(),
    arenaSection: z
      .union([z.boolean(), z.lazy(() => ArenaSectionArgsObjectSchema)])
      .optional(),
    arenaSectionId: z.boolean().optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => TicketGroupCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const TicketGroupSelectObjectSchema = Schema;
