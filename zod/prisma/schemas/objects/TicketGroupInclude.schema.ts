import { z } from 'zod';
import { EventArgsObjectSchema } from './EventArgs.schema';
import { TicketFindManySchema } from '../findManyTicket.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { TicketGroupCountOutputTypeArgsObjectSchema } from './TicketGroupCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupInclude> = z
  .object({
    Event: z
      .union([z.boolean(), z.lazy(() => EventArgsObjectSchema)])
      .optional(),
    tickets: z
      .union([z.boolean(), z.lazy(() => TicketFindManySchema)])
      .optional(),
    seller: z
      .union([z.boolean(), z.lazy(() => UserArgsObjectSchema)])
      .optional(),
    buyer: z
      .union([z.boolean(), z.lazy(() => UserArgsObjectSchema)])
      .optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => TicketGroupCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const TicketGroupIncludeObjectSchema = Schema;
