// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { PaymentAccountDetailsCountOrderByAggregateInputObjectSchema } from '../internals';;
import { PaymentAccountDetailsAvgOrderByAggregateInputObjectSchema } from '../internals';;
import { PaymentAccountDetailsMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { PaymentAccountDetailsMinOrderByAggregateInputObjectSchema } from '../internals';;
import { PaymentAccountDetailsSumOrderByAggregateInputObjectSchema } from '../internals';

export const PaymentAccountDetailsOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  nameOnAccount: SortOrderSchema,  _count: PaymentAccountDetailsCountOrderByAggregateInputObjectSchema,  _avg: PaymentAccountDetailsAvgOrderByAggregateInputObjectSchema,  _max: PaymentAccountDetailsMaxOrderByAggregateInputObjectSchema,  _min: PaymentAccountDetailsMinOrderByAggregateInputObjectSchema,  _sum: PaymentAccountDetailsSumOrderByAggregateInputObjectSchema
});
