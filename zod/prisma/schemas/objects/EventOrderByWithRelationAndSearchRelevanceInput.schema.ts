import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ArenaOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './ArenaOrderByWithRelationAndSearchRelevanceInput.schema';
import { TicketOrderByRelationAggregateInputObjectSchema } from './TicketOrderByRelationAggregateInput.schema';
import { TicketGroupOrderByRelationAggregateInputObjectSchema } from './TicketGroupOrderByRelationAggregateInput.schema';
import { ArenaAmenitiesOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './ArenaAmenitiesOrderByWithRelationAndSearchRelevanceInput.schema';
import { TagOrderByRelationAggregateInputObjectSchema } from './TagOrderByRelationAggregateInput.schema';
import { TeamOrderByRelationAggregateInputObjectSchema } from './TeamOrderByRelationAggregateInput.schema';
import { EventOrderByRelevanceInputObjectSchema } from './EventOrderByRelevanceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventOrderByWithRelationAndSearchRelevanceInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      category: z.lazy(() => SortOrderSchema).optional(),
      arenaId: z.lazy(() => SortOrderSchema).optional(),
      amenitiesId: z.lazy(() => SortOrderSchema).optional(),
      date: z.lazy(() => SortOrderSchema).optional(),
      title: z.lazy(() => SortOrderSchema).optional(),
      description: z.lazy(() => SortOrderSchema).optional(),
      arena: z
        .lazy(() => ArenaOrderByWithRelationAndSearchRelevanceInputObjectSchema)
        .optional(),
      tickets: z
        .lazy(() => TicketOrderByRelationAggregateInputObjectSchema)
        .optional(),
      ticketGroups: z
        .lazy(() => TicketGroupOrderByRelationAggregateInputObjectSchema)
        .optional(),
      amenities: z
        .lazy(
          () =>
            ArenaAmenitiesOrderByWithRelationAndSearchRelevanceInputObjectSchema,
        )
        .optional(),
      tags: z
        .lazy(() => TagOrderByRelationAggregateInputObjectSchema)
        .optional(),
      participants: z
        .lazy(() => TeamOrderByRelationAggregateInputObjectSchema)
        .optional(),
      _relevance: z
        .lazy(() => EventOrderByRelevanceInputObjectSchema)
        .optional(),
    })
    .strict();

export const EventOrderByWithRelationAndSearchRelevanceInputObjectSchema =
  Schema;
