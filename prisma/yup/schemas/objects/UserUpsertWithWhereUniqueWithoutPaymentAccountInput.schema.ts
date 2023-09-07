// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserWhereUniqueInputObjectSchema } from '../internals';;
import { UserUpdateWithoutPaymentAccountInputObjectSchema } from '../internals';;
import { UserUncheckedUpdateWithoutPaymentAccountInputObjectSchema } from '../internals';;
import { UserCreateWithoutPaymentAccountInputObjectSchema } from '../internals';;
import { UserUncheckedCreateWithoutPaymentAccountInputObjectSchema } from '../internals';

export const UserUpsertWithWhereUniqueWithoutPaymentAccountInputObjectSchema = Yup.object({
    where: UserWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([UserUpdateWithoutPaymentAccountInputObjectSchema,
UserUncheckedUpdateWithoutPaymentAccountInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([UserCreateWithoutPaymentAccountInputObjectSchema,
UserUncheckedCreateWithoutPaymentAccountInputObjectSchema])
});
