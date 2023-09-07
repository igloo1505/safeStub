// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { UserOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { PaymentAccountDetailsOrderByRelevanceInputObjectSchema } from '../internals';

export const PaymentAccountDetailsOrderByWithRelationAndSearchRelevanceInputObjectSchema = Yup.object({
    id: SortOrderSchema,  nameOnAccount: SortOrderSchema,  User: UserOrderByRelationAggregateInputObjectSchema,  _relevance: PaymentAccountDetailsOrderByRelevanceInputObjectSchema
});
