// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TransactionScalarWhereInputObjectSchema } from '../internals';;
import { TransactionUpdateManyMutationInputObjectSchema } from '../internals';;
import { TransactionUncheckedUpdateManyWithoutBoughtInputObjectSchema } from '../internals';

export const TransactionUpdateManyWithWhereWithoutBuyerInputObjectSchema = Yup.object({
    where: TransactionScalarWhereInputObjectSchema,  data: Yup.mixed().oneOfSchemas([TransactionUpdateManyMutationInputObjectSchema,
TransactionUncheckedUpdateManyWithoutBoughtInputObjectSchema])
});
