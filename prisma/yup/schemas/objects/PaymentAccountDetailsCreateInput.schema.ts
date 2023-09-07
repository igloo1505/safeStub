// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserCreateNestedManyWithoutPaymentAccountInputObjectSchema } from '../internals';

export const PaymentAccountDetailsCreateInputObjectSchema = Yup.object({
    nameOnAccount: Yup.string().required(),  User: UserCreateNestedManyWithoutPaymentAccountInputObjectSchema
});
