// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const TransactionUncheckedCreateWithoutSellerInputObjectSchema = Yup.object({
    id: Yup.number(),  price: Yup.number().required(),  paymentId: Yup.string().required(),  buyerId: Yup.number().required(),  date: Yup.date()
});
