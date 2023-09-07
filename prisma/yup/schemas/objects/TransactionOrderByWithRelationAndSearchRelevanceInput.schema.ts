// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { PurchaseHistoryOrderByWithRelationAndSearchRelevanceInputObjectSchema } from '../internals';;
import { TransactionOrderByRelevanceInputObjectSchema } from '../internals';

export const TransactionOrderByWithRelationAndSearchRelevanceInputObjectSchema = Yup.object({
    id: SortOrderSchema,  price: SortOrderSchema,  paymentId: SortOrderSchema,  sellerId: SortOrderSchema,  buyerId: SortOrderSchema,  date: SortOrderSchema,  seller: PurchaseHistoryOrderByWithRelationAndSearchRelevanceInputObjectSchema,  buyer: PurchaseHistoryOrderByWithRelationAndSearchRelevanceInputObjectSchema,  _relevance: TransactionOrderByRelevanceInputObjectSchema
});
