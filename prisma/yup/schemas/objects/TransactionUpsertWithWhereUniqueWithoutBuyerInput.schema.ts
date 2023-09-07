// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TransactionWhereUniqueInputObjectSchema } from '../internals';;
import { TransactionUpdateWithoutBuyerInputObjectSchema } from '../internals';;
import { TransactionUncheckedUpdateWithoutBuyerInputObjectSchema } from '../internals';;
import { TransactionCreateWithoutBuyerInputObjectSchema } from '../internals';;
import { TransactionUncheckedCreateWithoutBuyerInputObjectSchema } from '../internals';

export const TransactionUpsertWithWhereUniqueWithoutBuyerInputObjectSchema = Yup.object({
    where: TransactionWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([TransactionUpdateWithoutBuyerInputObjectSchema,
TransactionUncheckedUpdateWithoutBuyerInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([TransactionCreateWithoutBuyerInputObjectSchema,
TransactionUncheckedCreateWithoutBuyerInputObjectSchema])
});
