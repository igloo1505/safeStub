// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PurchaseHistoryCreateNestedOneWithoutSoldInputObjectSchema } from '../internals';;
import { PurchaseHistoryCreateNestedOneWithoutBoughtInputObjectSchema } from '../internals';

export const TransactionCreateInputObjectSchema = Yup.object({
    price: Yup.number().required(),  paymentId: Yup.string().required(),  date: Yup.date(),  seller: PurchaseHistoryCreateNestedOneWithoutSoldInputObjectSchema,  buyer: PurchaseHistoryCreateNestedOneWithoutBoughtInputObjectSchema
});
