// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { SortOrderInputObjectSchema } from '../internals';;
import { EventOrderByWithRelationAndSearchRelevanceInputObjectSchema } from '../internals';;
import { TicketOrderByRelationAggregateInputObjectSchema } from '../internals';

export const TicketGroupOrderByWithRelationAndSearchRelevanceInputObjectSchema = Yup.object({
    id: SortOrderSchema,  eventId: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  seatedTogether: SortOrderSchema,  Event: EventOrderByWithRelationAndSearchRelevanceInputObjectSchema,  tickets: TicketOrderByRelationAggregateInputObjectSchema
});
