// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserCreateWithoutPurchaseHistoryInputObjectSchema } from '../internals';;
import { UserUncheckedCreateWithoutPurchaseHistoryInputObjectSchema } from '../internals';;
import { UserCreateOrConnectWithoutPurchaseHistoryInputObjectSchema } from '../internals';;
import { UserWhereUniqueInputObjectSchema } from '../internals';

export const UserCreateNestedOneWithoutPurchaseHistoryInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([UserCreateWithoutPurchaseHistoryInputObjectSchema,
UserUncheckedCreateWithoutPurchaseHistoryInputObjectSchema]),  connectOrCreate: UserCreateOrConnectWithoutPurchaseHistoryInputObjectSchema,  connect: UserWhereUniqueInputObjectSchema
});
