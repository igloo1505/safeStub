// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PurchaseHistoryCreateNestedOneWithoutUserInputObjectSchema } from '../internals';;
import { PersonalDetailsCreateNestedOneWithoutUserInputObjectSchema } from '../internals';

export const UserCreateWithoutPaymentAccountInputObjectSchema = Yup.object({
    email: Yup.string().required(),  password: Yup.string().required(),  createdAt: Yup.date(),  purchaseHistory: PurchaseHistoryCreateNestedOneWithoutUserInputObjectSchema,  personalDetails: PersonalDetailsCreateNestedOneWithoutUserInputObjectSchema
});
