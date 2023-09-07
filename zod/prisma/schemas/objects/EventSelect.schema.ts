import { z } from 'zod';
import { ArenaArgsObjectSchema } from './ArenaArgs.schema';
import { TicketFindManySchema } from '../findManyTicket.schema';
import { TicketGroupFindManySchema } from '../findManyTicketGroup.schema';
import { ArenaAmenitiesArgsObjectSchema } from './ArenaAmenitiesArgs.schema';
import { TagFindManySchema } from '../findManyTag.schema';
import { TeamFindManySchema } from '../findManyTeam.schema';
import { EventCountOutputTypeArgsObjectSchema } from './EventCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventSelect> = z
  .object({
    id: z.boolean().optional(),
    category: z.boolean().optional(),
    arena: z
      .union([z.boolean(), z.lazy(() => ArenaArgsObjectSchema)])
      .optional(),
    arenaId: z.boolean().optional(),
    tickets: z
      .union([z.boolean(), z.lazy(() => TicketFindManySchema)])
      .optional(),
    ticketGroups: z
      .union([z.boolean(), z.lazy(() => TicketGroupFindManySchema)])
      .optional(),
    amenities: z
      .union([z.boolean(), z.lazy(() => ArenaAmenitiesArgsObjectSchema)])
      .optional(),
    amenitiesId: z.boolean().optional(),
    tags: z.union([z.boolean(), z.lazy(() => TagFindManySchema)]).optional(),
    date: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    participants: z
      .union([z.boolean(), z.lazy(() => TeamFindManySchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => EventCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const EventSelectObjectSchema = Schema;
