// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserWhereUniqueInputObjectSchema } from '../internals';;
import { UserUpdateWithoutPaymentAccountInputObjectSchema } from '../internals';;
import { UserUncheckedUpdateWithoutPaymentAccountInputObjectSchema } from '../internals';

export const UserUpdateWithWhereUniqueWithoutPaymentAccountInputObjectSchema = Yup.object({
    where: UserWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([UserUpdateWithoutPaymentAccountInputObjectSchema,
UserUncheckedUpdateWithoutPaymentAccountInputObjectSchema])
});
