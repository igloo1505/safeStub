// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const TransactionCountOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  price: SortOrderSchema,  paymentId: SortOrderSchema,  sellerId: SortOrderSchema,  buyerId: SortOrderSchema,  date: SortOrderSchema
});
