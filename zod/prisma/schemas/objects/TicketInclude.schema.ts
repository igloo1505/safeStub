import { z } from 'zod';
import { EventArgsObjectSchema } from './EventArgs.schema';
import { TicketGroupArgsObjectSchema } from './TicketGroupArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketInclude> = z
  .object({
    Event: z
      .union([z.boolean(), z.lazy(() => EventArgsObjectSchema)])
      .optional(),
    TicketGroup: z
      .union([z.boolean(), z.lazy(() => TicketGroupArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const TicketIncludeObjectSchema = Schema;
