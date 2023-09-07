// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TransactionCreateWithoutSellerInputObjectSchema } from '../internals';;
import { TransactionUncheckedCreateWithoutSellerInputObjectSchema } from '../internals';;
import { TransactionCreateOrConnectWithoutSellerInputObjectSchema } from '../internals';;
import { TransactionCreateManySellerInputEnvelopeObjectSchema } from '../internals';;
import { TransactionWhereUniqueInputObjectSchema } from '../internals';

export const TransactionUncheckedCreateNestedManyWithoutSellerInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([TransactionCreateWithoutSellerInputObjectSchema,
Yup.array().of(TransactionCreateWithoutSellerInputObjectSchema),
TransactionUncheckedCreateWithoutSellerInputObjectSchema,
Yup.array().of(TransactionUncheckedCreateWithoutSellerInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([TransactionCreateOrConnectWithoutSellerInputObjectSchema,
Yup.array().of(TransactionCreateOrConnectWithoutSellerInputObjectSchema)]),  createMany: TransactionCreateManySellerInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([TransactionWhereUniqueInputObjectSchema,
Yup.array().of(TransactionWhereUniqueInputObjectSchema)])
});
