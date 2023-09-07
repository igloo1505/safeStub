// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserUncheckedCreateNestedManyWithoutPaymentAccountInputObjectSchema } from '../internals';

export const PaymentAccountDetailsUncheckedCreateInputObjectSchema = Yup.object({
    id: Yup.number(),  nameOnAccount: Yup.string().required(),  User: UserUncheckedCreateNestedManyWithoutPaymentAccountInputObjectSchema
});
