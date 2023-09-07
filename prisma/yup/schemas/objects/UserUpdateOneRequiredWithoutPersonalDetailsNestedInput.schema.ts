// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserCreateWithoutPersonalDetailsInputObjectSchema } from '../internals';;
import { UserUncheckedCreateWithoutPersonalDetailsInputObjectSchema } from '../internals';;
import { UserCreateOrConnectWithoutPersonalDetailsInputObjectSchema } from '../internals';;
import { UserUpsertWithoutPersonalDetailsInputObjectSchema } from '../internals';;
import { UserWhereUniqueInputObjectSchema } from '../internals';;
import { UserUpdateWithoutPersonalDetailsInputObjectSchema } from '../internals';;
import { UserUncheckedUpdateWithoutPersonalDetailsInputObjectSchema } from '../internals';

export const UserUpdateOneRequiredWithoutPersonalDetailsNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([UserCreateWithoutPersonalDetailsInputObjectSchema,
UserUncheckedCreateWithoutPersonalDetailsInputObjectSchema]),  connectOrCreate: UserCreateOrConnectWithoutPersonalDetailsInputObjectSchema,  upsert: UserUpsertWithoutPersonalDetailsInputObjectSchema,  connect: UserWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([UserUpdateWithoutPersonalDetailsInputObjectSchema,
UserUncheckedUpdateWithoutPersonalDetailsInputObjectSchema])
});
