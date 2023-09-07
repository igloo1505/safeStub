// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TransactionWhereUniqueInputObjectSchema } from '../internals';;
import { TransactionUpdateWithoutSellerInputObjectSchema } from '../internals';;
import { TransactionUncheckedUpdateWithoutSellerInputObjectSchema } from '../internals';;
import { TransactionCreateWithoutSellerInputObjectSchema } from '../internals';;
import { TransactionUncheckedCreateWithoutSellerInputObjectSchema } from '../internals';

export const TransactionUpsertWithWhereUniqueWithoutSellerInputObjectSchema = Yup.object({
    where: TransactionWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([TransactionUpdateWithoutSellerInputObjectSchema,
TransactionUncheckedUpdateWithoutSellerInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([TransactionCreateWithoutSellerInputObjectSchema,
TransactionUncheckedCreateWithoutSellerInputObjectSchema])
});
