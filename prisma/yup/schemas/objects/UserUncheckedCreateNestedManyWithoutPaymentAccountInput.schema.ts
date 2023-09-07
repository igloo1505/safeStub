// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserCreateWithoutPaymentAccountInputObjectSchema } from '../internals';;
import { UserUncheckedCreateWithoutPaymentAccountInputObjectSchema } from '../internals';;
import { UserCreateOrConnectWithoutPaymentAccountInputObjectSchema } from '../internals';;
import { UserCreateManyPaymentAccountInputEnvelopeObjectSchema } from '../internals';;
import { UserWhereUniqueInputObjectSchema } from '../internals';

export const UserUncheckedCreateNestedManyWithoutPaymentAccountInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([UserCreateWithoutPaymentAccountInputObjectSchema,
Yup.array().of(UserCreateWithoutPaymentAccountInputObjectSchema),
UserUncheckedCreateWithoutPaymentAccountInputObjectSchema,
Yup.array().of(UserUncheckedCreateWithoutPaymentAccountInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([UserCreateOrConnectWithoutPaymentAccountInputObjectSchema,
Yup.array().of(UserCreateOrConnectWithoutPaymentAccountInputObjectSchema)]),  createMany: UserCreateManyPaymentAccountInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([UserWhereUniqueInputObjectSchema,
Yup.array().of(UserWhereUniqueInputObjectSchema)])
});
