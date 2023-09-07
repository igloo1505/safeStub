// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { SortOrderInputObjectSchema } from '../internals';;
import { TicketGroupCountOrderByAggregateInputObjectSchema } from '../internals';;
import { TicketGroupAvgOrderByAggregateInputObjectSchema } from '../internals';;
import { TicketGroupMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { TicketGroupMinOrderByAggregateInputObjectSchema } from '../internals';;
import { TicketGroupSumOrderByAggregateInputObjectSchema } from '../internals';

export const TicketGroupOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  eventId: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  seatedTogether: SortOrderSchema,  _count: TicketGroupCountOrderByAggregateInputObjectSchema,  _avg: TicketGroupAvgOrderByAggregateInputObjectSchema,  _max: TicketGroupMaxOrderByAggregateInputObjectSchema,  _min: TicketGroupMinOrderByAggregateInputObjectSchema,  _sum: TicketGroupSumOrderByAggregateInputObjectSchema
});
