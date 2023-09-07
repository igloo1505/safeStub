// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { TransactionUnboundOrderByRelevanceInputObjectSchema } from '../internals';

export const TransactionUnboundOrderByWithRelationAndSearchRelevanceInputObjectSchema = Yup.object({
    id: SortOrderSchema,  price: SortOrderSchema,  paymentId: SortOrderSchema,  sellerId: SortOrderSchema,  buyerId: SortOrderSchema,  date: SortOrderSchema,  _relevance: TransactionUnboundOrderByRelevanceInputObjectSchema
});
