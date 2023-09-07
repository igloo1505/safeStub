// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { SortOrderInputObjectSchema } from '../internals';;
import { TicketCountOrderByAggregateInputObjectSchema } from '../internals';;
import { TicketAvgOrderByAggregateInputObjectSchema } from '../internals';;
import { TicketMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { TicketMinOrderByAggregateInputObjectSchema } from '../internals';;
import { TicketSumOrderByAggregateInputObjectSchema } from '../internals';

export const TicketOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  eventId: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  ticketGroupId: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  arenaSectionId: SortOrderSchema,  _count: TicketCountOrderByAggregateInputObjectSchema,  _avg: TicketAvgOrderByAggregateInputObjectSchema,  _max: TicketMaxOrderByAggregateInputObjectSchema,  _min: TicketMinOrderByAggregateInputObjectSchema,  _sum: TicketSumOrderByAggregateInputObjectSchema
});
