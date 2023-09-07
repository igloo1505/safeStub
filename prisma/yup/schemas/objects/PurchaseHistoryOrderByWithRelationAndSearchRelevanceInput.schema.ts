// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { TransactionOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { UserOrderByWithRelationAndSearchRelevanceInputObjectSchema } from '../internals';

export const PurchaseHistoryOrderByWithRelationAndSearchRelevanceInputObjectSchema = Yup.object({
    id: SortOrderSchema,  userId: SortOrderSchema,  bought: TransactionOrderByRelationAggregateInputObjectSchema,  sold: TransactionOrderByRelationAggregateInputObjectSchema,  user: UserOrderByWithRelationAndSearchRelevanceInputObjectSchema
});
