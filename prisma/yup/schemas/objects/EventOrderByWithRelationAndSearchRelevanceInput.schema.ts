// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { ArenaOrderByWithRelationAndSearchRelevanceInputObjectSchema } from '../internals';;
import { TicketOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { TicketGroupOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { ArenaAmenitiesOrderByWithRelationAndSearchRelevanceInputObjectSchema } from '../internals';;
import { TagOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { TeamOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { EventOrderByRelevanceInputObjectSchema } from '../internals';

export const EventOrderByWithRelationAndSearchRelevanceInputObjectSchema = Yup.object({
    id: SortOrderSchema,  category: SortOrderSchema,  arenaId: SortOrderSchema,  amenitiesId: SortOrderSchema,  date: SortOrderSchema,  title: SortOrderSchema,  description: SortOrderSchema,  arena: ArenaOrderByWithRelationAndSearchRelevanceInputObjectSchema,  tickets: TicketOrderByRelationAggregateInputObjectSchema,  ticketGroups: TicketGroupOrderByRelationAggregateInputObjectSchema,  amenities: ArenaAmenitiesOrderByWithRelationAndSearchRelevanceInputObjectSchema,  tags: TagOrderByRelationAggregateInputObjectSchema,  participants: TeamOrderByRelationAggregateInputObjectSchema,  _relevance: EventOrderByRelevanceInputObjectSchema
});
