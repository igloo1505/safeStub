// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PurchaseHistoryCreateNestedOneWithoutBoughtInputObjectSchema } from '../internals';

export const TransactionCreateWithoutSellerInputObjectSchema = Yup.object({
    price: Yup.number().required(),  paymentId: Yup.string().required(),  date: Yup.date(),  buyer: PurchaseHistoryCreateNestedOneWithoutBoughtInputObjectSchema
});
