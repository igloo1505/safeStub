// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserCreateManyPaymentAccountInputObjectSchema } from '../internals';

export const UserCreateManyPaymentAccountInputEnvelopeObjectSchema = Yup.object({
    data: Yup.mixed().oneOfSchemas([UserCreateManyPaymentAccountInputObjectSchema,
Yup.array().of(UserCreateManyPaymentAccountInputObjectSchema)]),  skipDuplicates: Yup.boolean()
});
