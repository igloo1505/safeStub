// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TransactionWhereUniqueInputObjectSchema } from '../internals';;
import { TransactionUpdateWithoutBuyerInputObjectSchema } from '../internals';;
import { TransactionUncheckedUpdateWithoutBuyerInputObjectSchema } from '../internals';

export const TransactionUpdateWithWhereUniqueWithoutBuyerInputObjectSchema = Yup.object({
    where: TransactionWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([TransactionUpdateWithoutBuyerInputObjectSchema,
TransactionUncheckedUpdateWithoutBuyerInputObjectSchema])
});
