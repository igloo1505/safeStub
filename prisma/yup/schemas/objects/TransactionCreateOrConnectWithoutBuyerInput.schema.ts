// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TransactionWhereUniqueInputObjectSchema } from '../internals';;
import { TransactionCreateWithoutBuyerInputObjectSchema } from '../internals';;
import { TransactionUncheckedCreateWithoutBuyerInputObjectSchema } from '../internals';

export const TransactionCreateOrConnectWithoutBuyerInputObjectSchema = Yup.object({
    where: TransactionWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([TransactionCreateWithoutBuyerInputObjectSchema,
TransactionUncheckedCreateWithoutBuyerInputObjectSchema])
});
