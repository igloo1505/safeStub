// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TransactionUpdateManyWithoutSellerNestedInputObjectSchema } from '../internals';;
import { UserUpdateOneRequiredWithoutPurchaseHistoryNestedInputObjectSchema } from '../internals';

export const PurchaseHistoryUpdateWithoutBoughtInputObjectSchema = Yup.object({
    sold: TransactionUpdateManyWithoutSellerNestedInputObjectSchema,  user: UserUpdateOneRequiredWithoutPurchaseHistoryNestedInputObjectSchema
});
