import { z } from 'zod';
import { TicketGroupCountOutputTypeSelectObjectSchema } from './TicketGroupCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupCountOutputTypeArgs> = z
  .object({
    select: z
      .lazy(() => TicketGroupCountOutputTypeSelectObjectSchema)
      .optional(),
  })
  .strict();

export const TicketGroupCountOutputTypeArgsObjectSchema = Schema;
