// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TransactionUpdateManyWithoutBuyerNestedInputObjectSchema } from '../internals';;
import { UserUpdateOneRequiredWithoutPurchaseHistoryNestedInputObjectSchema } from '../internals';

export const PurchaseHistoryUpdateWithoutSoldInputObjectSchema = Yup.object({
    bought: TransactionUpdateManyWithoutBuyerNestedInputObjectSchema,  user: UserUpdateOneRequiredWithoutPurchaseHistoryNestedInputObjectSchema
});
