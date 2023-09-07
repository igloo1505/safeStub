// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TransactionCreateWithoutBuyerInputObjectSchema } from '../internals';;
import { TransactionUncheckedCreateWithoutBuyerInputObjectSchema } from '../internals';;
import { TransactionCreateOrConnectWithoutBuyerInputObjectSchema } from '../internals';;
import { TransactionUpsertWithWhereUniqueWithoutBuyerInputObjectSchema } from '../internals';;
import { TransactionCreateManyBuyerInputEnvelopeObjectSchema } from '../internals';;
import { TransactionWhereUniqueInputObjectSchema } from '../internals';;
import { TransactionUpdateWithWhereUniqueWithoutBuyerInputObjectSchema } from '../internals';;
import { TransactionUpdateManyWithWhereWithoutBuyerInputObjectSchema } from '../internals';;
import { TransactionScalarWhereInputObjectSchema } from '../internals';

export const TransactionUncheckedUpdateManyWithoutBuyerNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([TransactionCreateWithoutBuyerInputObjectSchema,
Yup.array().of(TransactionCreateWithoutBuyerInputObjectSchema),
TransactionUncheckedCreateWithoutBuyerInputObjectSchema,
Yup.array().of(TransactionUncheckedCreateWithoutBuyerInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([TransactionCreateOrConnectWithoutBuyerInputObjectSchema,
Yup.array().of(TransactionCreateOrConnectWithoutBuyerInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([TransactionUpsertWithWhereUniqueWithoutBuyerInputObjectSchema,
Yup.array().of(TransactionUpsertWithWhereUniqueWithoutBuyerInputObjectSchema)]),  createMany: TransactionCreateManyBuyerInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([TransactionWhereUniqueInputObjectSchema,
Yup.array().of(TransactionWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([TransactionWhereUniqueInputObjectSchema,
Yup.array().of(TransactionWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([TransactionWhereUniqueInputObjectSchema,
Yup.array().of(TransactionWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([TransactionWhereUniqueInputObjectSchema,
Yup.array().of(TransactionWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([TransactionUpdateWithWhereUniqueWithoutBuyerInputObjectSchema,
Yup.array().of(TransactionUpdateWithWhereUniqueWithoutBuyerInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([TransactionUpdateManyWithWhereWithoutBuyerInputObjectSchema,
Yup.array().of(TransactionUpdateManyWithWhereWithoutBuyerInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([TransactionScalarWhereInputObjectSchema,
Yup.array().of(TransactionScalarWhereInputObjectSchema)])
});
