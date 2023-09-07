// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TransactionUncheckedCreateNestedManyWithoutBuyerInputObjectSchema } from '../internals';;
import { TransactionUncheckedCreateNestedManyWithoutSellerInputObjectSchema } from '../internals';

export const PurchaseHistoryUncheckedCreateWithoutUserInputObjectSchema = Yup.object({
    id: Yup.number(),  bought: TransactionUncheckedCreateNestedManyWithoutBuyerInputObjectSchema,  sold: TransactionUncheckedCreateNestedManyWithoutSellerInputObjectSchema
});
