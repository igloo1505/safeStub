// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { SortOrderInputObjectSchema } from '../internals';;
import { EventOrderByWithRelationAndSearchRelevanceInputObjectSchema } from '../internals';;
import { TicketGroupOrderByWithRelationAndSearchRelevanceInputObjectSchema } from '../internals';;
import { ArenaSectionOrderByWithRelationAndSearchRelevanceInputObjectSchema } from '../internals';

export const TicketOrderByWithRelationAndSearchRelevanceInputObjectSchema = Yup.object({
    id: SortOrderSchema,  eventId: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  ticketGroupId: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  arenaSectionId: SortOrderSchema,  Event: EventOrderByWithRelationAndSearchRelevanceInputObjectSchema,  TicketGroup: TicketGroupOrderByWithRelationAndSearchRelevanceInputObjectSchema,  arenaSection: ArenaSectionOrderByWithRelationAndSearchRelevanceInputObjectSchema
});
