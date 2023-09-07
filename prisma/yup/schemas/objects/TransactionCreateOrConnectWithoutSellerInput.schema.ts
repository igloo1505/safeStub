// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TransactionWhereUniqueInputObjectSchema } from '../internals';;
import { TransactionCreateWithoutSellerInputObjectSchema } from '../internals';;
import { TransactionUncheckedCreateWithoutSellerInputObjectSchema } from '../internals';

export const TransactionCreateOrConnectWithoutSellerInputObjectSchema = Yup.object({
    where: TransactionWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([TransactionCreateWithoutSellerInputObjectSchema,
TransactionUncheckedCreateWithoutSellerInputObjectSchema])
});
