// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserWhereUniqueInputObjectSchema } from '../internals';;
import { UserCreateWithoutPersonalDetailsInputObjectSchema } from '../internals';;
import { UserUncheckedCreateWithoutPersonalDetailsInputObjectSchema } from '../internals';

export const UserCreateOrConnectWithoutPersonalDetailsInputObjectSchema = Yup.object({
    where: UserWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([UserCreateWithoutPersonalDetailsInputObjectSchema,
UserUncheckedCreateWithoutPersonalDetailsInputObjectSchema])
});
