// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserUpdateWithoutPersonalDetailsInputObjectSchema } from '../internals';;
import { UserUncheckedUpdateWithoutPersonalDetailsInputObjectSchema } from '../internals';;
import { UserCreateWithoutPersonalDetailsInputObjectSchema } from '../internals';;
import { UserUncheckedCreateWithoutPersonalDetailsInputObjectSchema } from '../internals';

export const UserUpsertWithoutPersonalDetailsInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([UserUpdateWithoutPersonalDetailsInputObjectSchema,
UserUncheckedUpdateWithoutPersonalDetailsInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([UserCreateWithoutPersonalDetailsInputObjectSchema,
UserUncheckedCreateWithoutPersonalDetailsInputObjectSchema])
});
