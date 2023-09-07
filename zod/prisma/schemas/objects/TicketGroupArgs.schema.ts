import { z } from 'zod';
import { TicketGroupSelectObjectSchema } from './TicketGroupSelect.schema';
import { TicketGroupIncludeObjectSchema } from './TicketGroupInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupArgs> = z
  .object({
    select: z.lazy(() => TicketGroupSelectObjectSchema).optional(),
    include: z.lazy(() => TicketGroupIncludeObjectSchema).optional(),
  })
  .strict();

export const TicketGroupArgsObjectSchema = Schema;
