// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PaymentAccountDetailsCreateNestedOneWithoutUserInputObjectSchema } from '../internals';;
import { PurchaseHistoryCreateNestedOneWithoutUserInputObjectSchema } from '../internals';

export const UserCreateWithoutPersonalDetailsInputObjectSchema = Yup.object({
    email: Yup.string().required(),  password: Yup.string().required(),  createdAt: Yup.date(),  paymentAccount: PaymentAccountDetailsCreateNestedOneWithoutUserInputObjectSchema,  purchaseHistory: PurchaseHistoryCreateNestedOneWithoutUserInputObjectSchema
});
