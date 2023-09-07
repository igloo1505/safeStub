// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserUpdateWithoutPurchaseHistoryInputObjectSchema } from '../internals';;
import { UserUncheckedUpdateWithoutPurchaseHistoryInputObjectSchema } from '../internals';;
import { UserCreateWithoutPurchaseHistoryInputObjectSchema } from '../internals';;
import { UserUncheckedCreateWithoutPurchaseHistoryInputObjectSchema } from '../internals';

export const UserUpsertWithoutPurchaseHistoryInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([UserUpdateWithoutPurchaseHistoryInputObjectSchema,
UserUncheckedUpdateWithoutPurchaseHistoryInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([UserCreateWithoutPurchaseHistoryInputObjectSchema,
UserUncheckedCreateWithoutPurchaseHistoryInputObjectSchema])
});
