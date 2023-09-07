// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const UserMaxOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  email: SortOrderSchema,  password: SortOrderSchema,  role: SortOrderSchema,  createdAt: SortOrderSchema,  paymentAccountDetailsId: SortOrderSchema,  verified: SortOrderSchema
});
