import { z } from 'zod';
import { TicketSelectObjectSchema } from './TicketSelect.schema';
import { TicketIncludeObjectSchema } from './TicketInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketArgs> = z
  .object({
    select: z.lazy(() => TicketSelectObjectSchema).optional(),
    include: z.lazy(() => TicketIncludeObjectSchema).optional(),
  })
  .strict();

export const TicketArgsObjectSchema = Schema;
