// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserCreateWithoutPurchaseHistoryInputObjectSchema } from '../internals';;
import { UserUncheckedCreateWithoutPurchaseHistoryInputObjectSchema } from '../internals';;
import { UserCreateOrConnectWithoutPurchaseHistoryInputObjectSchema } from '../internals';;
import { UserUpsertWithoutPurchaseHistoryInputObjectSchema } from '../internals';;
import { UserWhereUniqueInputObjectSchema } from '../internals';;
import { UserUpdateWithoutPurchaseHistoryInputObjectSchema } from '../internals';;
import { UserUncheckedUpdateWithoutPurchaseHistoryInputObjectSchema } from '../internals';

export const UserUpdateOneRequiredWithoutPurchaseHistoryNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([UserCreateWithoutPurchaseHistoryInputObjectSchema,
UserUncheckedCreateWithoutPurchaseHistoryInputObjectSchema]),  connectOrCreate: UserCreateOrConnectWithoutPurchaseHistoryInputObjectSchema,  upsert: UserUpsertWithoutPurchaseHistoryInputObjectSchema,  connect: UserWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([UserUpdateWithoutPurchaseHistoryInputObjectSchema,
UserUncheckedUpdateWithoutPurchaseHistoryInputObjectSchema])
});
