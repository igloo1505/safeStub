import { z } from 'zod';
import { ArenaArgsObjectSchema } from './ArenaArgs.schema';
import { TicketFindManySchema } from '../findManyTicket.schema';
import { TicketGroupFindManySchema } from '../findManyTicketGroup.schema';
import { ArenaSectionCountOutputTypeArgsObjectSchema } from './ArenaSectionCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaSectionSelect> = z
  .object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    Arena: z
      .union([z.boolean(), z.lazy(() => ArenaArgsObjectSchema)])
      .optional(),
    arenaId: z.boolean().optional(),
    section: z.boolean().optional(),
    row: z.boolean().optional(),
    Ticket: z
      .union([z.boolean(), z.lazy(() => TicketFindManySchema)])
      .optional(),
    TicketGroup: z
      .union([z.boolean(), z.lazy(() => TicketGroupFindManySchema)])
      .optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => ArenaSectionCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ArenaSectionSelectObjectSchema = Schema;
