// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserCreateWithoutPersonalDetailsInputObjectSchema } from '../internals';;
import { UserUncheckedCreateWithoutPersonalDetailsInputObjectSchema } from '../internals';;
import { UserCreateOrConnectWithoutPersonalDetailsInputObjectSchema } from '../internals';;
import { UserWhereUniqueInputObjectSchema } from '../internals';

export const UserCreateNestedOneWithoutPersonalDetailsInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([UserCreateWithoutPersonalDetailsInputObjectSchema,
UserUncheckedCreateWithoutPersonalDetailsInputObjectSchema]),  connectOrCreate: UserCreateOrConnectWithoutPersonalDetailsInputObjectSchema,  connect: UserWhereUniqueInputObjectSchema
});
