// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const TicketMinOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  eventId: SortOrderSchema,  ticketGroupId: SortOrderSchema,  arenaSectionId: SortOrderSchema
});
