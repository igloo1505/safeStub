// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const PaymentAccountDetailsCreateManyInputObjectSchema = Yup.object({
    id: Yup.number(),  nameOnAccount: Yup.string().required()
});
