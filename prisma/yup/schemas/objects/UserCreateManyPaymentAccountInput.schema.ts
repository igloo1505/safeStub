// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const UserCreateManyPaymentAccountInputObjectSchema = Yup.object({
    id: Yup.number(),  email: Yup.string().required(),  password: Yup.string().required(),  createdAt: Yup.date()
});
