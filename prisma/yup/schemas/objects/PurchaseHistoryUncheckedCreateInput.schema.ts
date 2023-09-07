// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TransactionUncheckedCreateNestedManyWithoutBuyerInputObjectSchema } from '../internals';;
import { TransactionUncheckedCreateNestedManyWithoutSellerInputObjectSchema } from '../internals';

export const PurchaseHistoryUncheckedCreateInputObjectSchema = Yup.object({
    id: Yup.number(),  userId: Yup.number().required(),  bought: TransactionUncheckedCreateNestedManyWithoutBuyerInputObjectSchema,  sold: TransactionUncheckedCreateNestedManyWithoutSellerInputObjectSchema
});
