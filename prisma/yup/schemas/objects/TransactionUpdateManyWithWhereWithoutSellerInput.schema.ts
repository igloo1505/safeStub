// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TransactionScalarWhereInputObjectSchema } from '../internals';;
import { TransactionUpdateManyMutationInputObjectSchema } from '../internals';;
import { TransactionUncheckedUpdateManyWithoutSoldInputObjectSchema } from '../internals';

export const TransactionUpdateManyWithWhereWithoutSellerInputObjectSchema = Yup.object({
    where: TransactionScalarWhereInputObjectSchema,  data: Yup.mixed().oneOfSchemas([TransactionUpdateManyMutationInputObjectSchema,
TransactionUncheckedUpdateManyWithoutSoldInputObjectSchema])
});
