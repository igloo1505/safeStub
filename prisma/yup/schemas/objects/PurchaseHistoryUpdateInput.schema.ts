// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TransactionUpdateManyWithoutBuyerNestedInputObjectSchema } from '../internals';;
import { TransactionUpdateManyWithoutSellerNestedInputObjectSchema } from '../internals';;
import { UserUpdateOneRequiredWithoutPurchaseHistoryNestedInputObjectSchema } from '../internals';

export const PurchaseHistoryUpdateInputObjectSchema = Yup.object({
    bought: TransactionUpdateManyWithoutBuyerNestedInputObjectSchema,  sold: TransactionUpdateManyWithoutSellerNestedInputObjectSchema,  user: UserUpdateOneRequiredWithoutPurchaseHistoryNestedInputObjectSchema
});
