// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TransactionCreateWithoutSellerInputObjectSchema } from '../internals';;
import { TransactionUncheckedCreateWithoutSellerInputObjectSchema } from '../internals';;
import { TransactionCreateOrConnectWithoutSellerInputObjectSchema } from '../internals';;
import { TransactionUpsertWithWhereUniqueWithoutSellerInputObjectSchema } from '../internals';;
import { TransactionCreateManySellerInputEnvelopeObjectSchema } from '../internals';;
import { TransactionWhereUniqueInputObjectSchema } from '../internals';;
import { TransactionUpdateWithWhereUniqueWithoutSellerInputObjectSchema } from '../internals';;
import { TransactionUpdateManyWithWhereWithoutSellerInputObjectSchema } from '../internals';;
import { TransactionScalarWhereInputObjectSchema } from '../internals';

export const TransactionUncheckedUpdateManyWithoutSellerNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([TransactionCreateWithoutSellerInputObjectSchema,
Yup.array().of(TransactionCreateWithoutSellerInputObjectSchema),
TransactionUncheckedCreateWithoutSellerInputObjectSchema,
Yup.array().of(TransactionUncheckedCreateWithoutSellerInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([TransactionCreateOrConnectWithoutSellerInputObjectSchema,
Yup.array().of(TransactionCreateOrConnectWithoutSellerInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([TransactionUpsertWithWhereUniqueWithoutSellerInputObjectSchema,
Yup.array().of(TransactionUpsertWithWhereUniqueWithoutSellerInputObjectSchema)]),  createMany: TransactionCreateManySellerInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([TransactionWhereUniqueInputObjectSchema,
Yup.array().of(TransactionWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([TransactionWhereUniqueInputObjectSchema,
Yup.array().of(TransactionWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([TransactionWhereUniqueInputObjectSchema,
Yup.array().of(TransactionWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([TransactionWhereUniqueInputObjectSchema,
Yup.array().of(TransactionWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([TransactionUpdateWithWhereUniqueWithoutSellerInputObjectSchema,
Yup.array().of(TransactionUpdateWithWhereUniqueWithoutSellerInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([TransactionUpdateManyWithWhereWithoutSellerInputObjectSchema,
Yup.array().of(TransactionUpdateManyWithWhereWithoutSellerInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([TransactionScalarWhereInputObjectSchema,
Yup.array().of(TransactionScalarWhereInputObjectSchema)])
});
