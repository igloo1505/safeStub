// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PersonalDetailsUncheckedCreateNestedOneWithoutUserInputObjectSchema } from '../internals';

export const UserUncheckedCreateWithoutPurchaseHistoryInputObjectSchema = Yup.object({
    id: Yup.number(),  email: Yup.string().required(),  password: Yup.string().required(),  createdAt: Yup.date(),  paymentAccountDetailsId: Yup.mixed().oneOfSchemas([Yup.number()]),  personalDetails: PersonalDetailsUncheckedCreateNestedOneWithoutUserInputObjectSchema
});
