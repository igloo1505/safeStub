// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const TicketGroupMaxOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  eventId: SortOrderSchema,  seatedTogether: SortOrderSchema
});
