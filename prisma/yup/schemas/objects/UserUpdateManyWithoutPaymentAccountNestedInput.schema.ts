// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserCreateWithoutPaymentAccountInputObjectSchema } from '../internals';;
import { UserUncheckedCreateWithoutPaymentAccountInputObjectSchema } from '../internals';;
import { UserCreateOrConnectWithoutPaymentAccountInputObjectSchema } from '../internals';;
import { UserUpsertWithWhereUniqueWithoutPaymentAccountInputObjectSchema } from '../internals';;
import { UserCreateManyPaymentAccountInputEnvelopeObjectSchema } from '../internals';;
import { UserWhereUniqueInputObjectSchema } from '../internals';;
import { UserUpdateWithWhereUniqueWithoutPaymentAccountInputObjectSchema } from '../internals';;
import { UserUpdateManyWithWhereWithoutPaymentAccountInputObjectSchema } from '../internals';;
import { UserScalarWhereInputObjectSchema } from '../internals';

export const UserUpdateManyWithoutPaymentAccountNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([UserCreateWithoutPaymentAccountInputObjectSchema,
Yup.array().of(UserCreateWithoutPaymentAccountInputObjectSchema),
UserUncheckedCreateWithoutPaymentAccountInputObjectSchema,
Yup.array().of(UserUncheckedCreateWithoutPaymentAccountInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([UserCreateOrConnectWithoutPaymentAccountInputObjectSchema,
Yup.array().of(UserCreateOrConnectWithoutPaymentAccountInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([UserUpsertWithWhereUniqueWithoutPaymentAccountInputObjectSchema,
Yup.array().of(UserUpsertWithWhereUniqueWithoutPaymentAccountInputObjectSchema)]),  createMany: UserCreateManyPaymentAccountInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([UserWhereUniqueInputObjectSchema,
Yup.array().of(UserWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([UserWhereUniqueInputObjectSchema,
Yup.array().of(UserWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([UserWhereUniqueInputObjectSchema,
Yup.array().of(UserWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([UserWhereUniqueInputObjectSchema,
Yup.array().of(UserWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([UserUpdateWithWhereUniqueWithoutPaymentAccountInputObjectSchema,
Yup.array().of(UserUpdateWithWhereUniqueWithoutPaymentAccountInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([UserUpdateManyWithWhereWithoutPaymentAccountInputObjectSchema,
Yup.array().of(UserUpdateManyWithWhereWithoutPaymentAccountInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([UserScalarWhereInputObjectSchema,
Yup.array().of(UserScalarWhereInputObjectSchema)])
});
