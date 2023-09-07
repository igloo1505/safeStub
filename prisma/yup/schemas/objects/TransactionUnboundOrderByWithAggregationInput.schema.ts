// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { TransactionUnboundCountOrderByAggregateInputObjectSchema } from '../internals';;
import { TransactionUnboundAvgOrderByAggregateInputObjectSchema } from '../internals';;
import { TransactionUnboundMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { TransactionUnboundMinOrderByAggregateInputObjectSchema } from '../internals';;
import { TransactionUnboundSumOrderByAggregateInputObjectSchema } from '../internals';

export const TransactionUnboundOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  price: SortOrderSchema,  paymentId: SortOrderSchema,  sellerId: SortOrderSchema,  buyerId: SortOrderSchema,  date: SortOrderSchema,  _count: TransactionUnboundCountOrderByAggregateInputObjectSchema,  _avg: TransactionUnboundAvgOrderByAggregateInputObjectSchema,  _max: TransactionUnboundMaxOrderByAggregateInputObjectSchema,  _min: TransactionUnboundMinOrderByAggregateInputObjectSchema,  _sum: TransactionUnboundSumOrderByAggregateInputObjectSchema
});
