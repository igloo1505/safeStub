import { z } from 'zod';
import { ArenaArgsObjectSchema } from './ArenaArgs.schema';
import { TicketFindManySchema } from '../findManyTicket.schema';
import { ArenaSectionCountOutputTypeArgsObjectSchema } from './ArenaSectionCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaSectionInclude> = z
  .object({
    Arena: z
      .union([z.boolean(), z.lazy(() => ArenaArgsObjectSchema)])
      .optional(),
    Ticket: z
      .union([z.boolean(), z.lazy(() => TicketFindManySchema)])
      .optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => ArenaSectionCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ArenaSectionIncludeObjectSchema = Schema;
