// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const TransactionCreateManyInputObjectSchema = Yup.object({
    id: Yup.number(),  price: Yup.number().required(),  paymentId: Yup.string().required(),  sellerId: Yup.number().required(),  buyerId: Yup.number().required(),  date: Yup.date()
});
