// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const UserMinOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  email: SortOrderSchema,  password: SortOrderSchema,  role: SortOrderSchema,  createdAt: SortOrderSchema,  paymentAccountDetailsId: SortOrderSchema,  verified: SortOrderSchema
});
