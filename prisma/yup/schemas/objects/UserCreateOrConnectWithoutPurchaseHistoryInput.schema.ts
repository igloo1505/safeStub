// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserWhereUniqueInputObjectSchema } from '../internals';;
import { UserCreateWithoutPurchaseHistoryInputObjectSchema } from '../internals';;
import { UserUncheckedCreateWithoutPurchaseHistoryInputObjectSchema } from '../internals';

export const UserCreateOrConnectWithoutPurchaseHistoryInputObjectSchema = Yup.object({
    where: UserWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([UserCreateWithoutPurchaseHistoryInputObjectSchema,
UserUncheckedCreateWithoutPurchaseHistoryInputObjectSchema])
});
