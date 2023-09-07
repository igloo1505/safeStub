// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PurchaseHistoryUncheckedCreateNestedOneWithoutUserInputObjectSchema } from '../internals';

export const UserUncheckedCreateWithoutPersonalDetailsInputObjectSchema = Yup.object({
    id: Yup.number(),  email: Yup.string().required(),  password: Yup.string().required(),  createdAt: Yup.date(),  paymentAccountDetailsId: Yup.mixed().oneOfSchemas([Yup.number()]),  purchaseHistory: PurchaseHistoryUncheckedCreateNestedOneWithoutUserInputObjectSchema
});
