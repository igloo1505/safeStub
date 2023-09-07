// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { PurchaseHistoryCountOrderByAggregateInputObjectSchema } from '../internals';;
import { PurchaseHistoryAvgOrderByAggregateInputObjectSchema } from '../internals';;
import { PurchaseHistoryMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { PurchaseHistoryMinOrderByAggregateInputObjectSchema } from '../internals';;
import { PurchaseHistorySumOrderByAggregateInputObjectSchema } from '../internals';

export const PurchaseHistoryOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  userId: SortOrderSchema,  _count: PurchaseHistoryCountOrderByAggregateInputObjectSchema,  _avg: PurchaseHistoryAvgOrderByAggregateInputObjectSchema,  _max: PurchaseHistoryMaxOrderByAggregateInputObjectSchema,  _min: PurchaseHistoryMinOrderByAggregateInputObjectSchema,  _sum: PurchaseHistorySumOrderByAggregateInputObjectSchema
});
