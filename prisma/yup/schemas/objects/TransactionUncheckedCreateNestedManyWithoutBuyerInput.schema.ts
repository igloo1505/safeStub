// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TransactionCreateWithoutBuyerInputObjectSchema } from '../internals';;
import { TransactionUncheckedCreateWithoutBuyerInputObjectSchema } from '../internals';;
import { TransactionCreateOrConnectWithoutBuyerInputObjectSchema } from '../internals';;
import { TransactionCreateManyBuyerInputEnvelopeObjectSchema } from '../internals';;
import { TransactionWhereUniqueInputObjectSchema } from '../internals';

export const TransactionUncheckedCreateNestedManyWithoutBuyerInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([TransactionCreateWithoutBuyerInputObjectSchema,
Yup.array().of(TransactionCreateWithoutBuyerInputObjectSchema),
TransactionUncheckedCreateWithoutBuyerInputObjectSchema,
Yup.array().of(TransactionUncheckedCreateWithoutBuyerInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([TransactionCreateOrConnectWithoutBuyerInputObjectSchema,
Yup.array().of(TransactionCreateOrConnectWithoutBuyerInputObjectSchema)]),  createMany: TransactionCreateManyBuyerInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([TransactionWhereUniqueInputObjectSchema,
Yup.array().of(TransactionWhereUniqueInputObjectSchema)])
});
