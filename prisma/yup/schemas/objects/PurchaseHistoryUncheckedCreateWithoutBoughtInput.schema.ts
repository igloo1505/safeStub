// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TransactionUncheckedCreateNestedManyWithoutSellerInputObjectSchema } from '../internals';

export const PurchaseHistoryUncheckedCreateWithoutBoughtInputObjectSchema = Yup.object({
    id: Yup.number(),  userId: Yup.number().required(),  sold: TransactionUncheckedCreateNestedManyWithoutSellerInputObjectSchema
});
