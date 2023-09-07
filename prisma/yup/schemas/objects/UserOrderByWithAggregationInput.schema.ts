// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { SortOrderInputObjectSchema } from '../internals';;
import { UserCountOrderByAggregateInputObjectSchema } from '../internals';;
import { UserAvgOrderByAggregateInputObjectSchema } from '../internals';;
import { UserMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { UserMinOrderByAggregateInputObjectSchema } from '../internals';;
import { UserSumOrderByAggregateInputObjectSchema } from '../internals';

export const UserOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  email: SortOrderSchema,  password: SortOrderSchema,  role: SortOrderSchema,  createdAt: SortOrderSchema,  paymentAccountDetailsId: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  verified: SortOrderSchema,  _count: UserCountOrderByAggregateInputObjectSchema,  _avg: UserAvgOrderByAggregateInputObjectSchema,  _max: UserMaxOrderByAggregateInputObjectSchema,  _min: UserMinOrderByAggregateInputObjectSchema,  _sum: UserSumOrderByAggregateInputObjectSchema
});
