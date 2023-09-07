// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserWhereUniqueInputObjectSchema } from '../internals';;
import { UserCreateWithoutPaymentAccountInputObjectSchema } from '../internals';;
import { UserUncheckedCreateWithoutPaymentAccountInputObjectSchema } from '../internals';

export const UserCreateOrConnectWithoutPaymentAccountInputObjectSchema = Yup.object({
    where: UserWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([UserCreateWithoutPaymentAccountInputObjectSchema,
UserUncheckedCreateWithoutPaymentAccountInputObjectSchema])
});
