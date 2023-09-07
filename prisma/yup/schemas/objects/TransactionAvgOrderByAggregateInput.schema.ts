// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const TransactionAvgOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  price: SortOrderSchema,  sellerId: SortOrderSchema,  buyerId: SortOrderSchema
});
