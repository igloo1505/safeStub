// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TransactionWhereUniqueInputObjectSchema } from '../internals';;
import { TransactionUpdateWithoutSellerInputObjectSchema } from '../internals';;
import { TransactionUncheckedUpdateWithoutSellerInputObjectSchema } from '../internals';

export const TransactionUpdateWithWhereUniqueWithoutSellerInputObjectSchema = Yup.object({
    where: TransactionWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([TransactionUpdateWithoutSellerInputObjectSchema,
TransactionUncheckedUpdateWithoutSellerInputObjectSchema])
});
