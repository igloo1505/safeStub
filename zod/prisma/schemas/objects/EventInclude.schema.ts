import { z } from 'zod';
import { ArenaArgsObjectSchema } from './ArenaArgs.schema';
import { TicketFindManySchema } from '../findManyTicket.schema';
import { TicketGroupFindManySchema } from '../findManyTicketGroup.schema';
import { ArenaAmenitiesArgsObjectSchema } from './ArenaAmenitiesArgs.schema';
import { TagFindManySchema } from '../findManyTag.schema';
import { TeamFindManySchema } from '../findManyTeam.schema';
import { EventCountOutputTypeArgsObjectSchema } from './EventCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventInclude> = z
  .object({
    arena: z
      .union([z.boolean(), z.lazy(() => ArenaArgsObjectSchema)])
      .optional(),
    tickets: z
      .union([z.boolean(), z.lazy(() => TicketFindManySchema)])
      .optional(),
    ticketGroups: z
      .union([z.boolean(), z.lazy(() => TicketGroupFindManySchema)])
      .optional(),
    amenities: z
      .union([z.boolean(), z.lazy(() => ArenaAmenitiesArgsObjectSchema)])
      .optional(),
    tags: z.union([z.boolean(), z.lazy(() => TagFindManySchema)]).optional(),
    participants: z
      .union([z.boolean(), z.lazy(() => TeamFindManySchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => EventCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const EventIncludeObjectSchema = Schema;
