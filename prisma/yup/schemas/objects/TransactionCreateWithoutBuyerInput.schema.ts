// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PurchaseHistoryCreateNestedOneWithoutSoldInputObjectSchema } from '../internals';

export const TransactionCreateWithoutBuyerInputObjectSchema = Yup.object({
    price: Yup.number().required(),  paymentId: Yup.string().required(),  date: Yup.date(),  seller: PurchaseHistoryCreateNestedOneWithoutSoldInputObjectSchema
});
