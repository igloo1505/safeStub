// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { SortOrderInputObjectSchema } from '../internals';;
import { PaymentAccountDetailsOrderByWithRelationAndSearchRelevanceInputObjectSchema } from '../internals';;
import { PurchaseHistoryOrderByWithRelationAndSearchRelevanceInputObjectSchema } from '../internals';;
import { PersonalDetailsOrderByWithRelationAndSearchRelevanceInputObjectSchema } from '../internals';;
import { UserOrderByRelevanceInputObjectSchema } from '../internals';

export const UserOrderByWithRelationAndSearchRelevanceInputObjectSchema = Yup.object({
    id: SortOrderSchema,  email: SortOrderSchema,  password: SortOrderSchema,  role: SortOrderSchema,  createdAt: SortOrderSchema,  paymentAccountDetailsId: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  verified: SortOrderSchema,  paymentAccount: PaymentAccountDetailsOrderByWithRelationAndSearchRelevanceInputObjectSchema,  purchaseHistory: PurchaseHistoryOrderByWithRelationAndSearchRelevanceInputObjectSchema,  personalDetails: PersonalDetailsOrderByWithRelationAndSearchRelevanceInputObjectSchema,  _relevance: UserOrderByRelevanceInputObjectSchema
});
