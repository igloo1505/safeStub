import { z } from 'zod';
import { EventArgsObjectSchema } from './EventArgs.schema';
import { TicketGroupArgsObjectSchema } from './TicketGroupArgs.schema';
import { ArenaSectionArgsObjectSchema } from './ArenaSectionArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketSelect> = z
  .object({
    id: z.boolean().optional(),
    Event: z
      .union([z.boolean(), z.lazy(() => EventArgsObjectSchema)])
      .optional(),
    eventId: z.boolean().optional(),
    TicketGroup: z
      .union([z.boolean(), z.lazy(() => TicketGroupArgsObjectSchema)])
      .optional(),
    ticketGroupId: z.boolean().optional(),
    arenaSection: z
      .union([z.boolean(), z.lazy(() => ArenaSectionArgsObjectSchema)])
      .optional(),
    arenaSectionId: z.boolean().optional(),
  })
  .strict();

export const TicketSelectObjectSchema = Schema;
