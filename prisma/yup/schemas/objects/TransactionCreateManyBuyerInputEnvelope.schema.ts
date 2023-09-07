// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TransactionCreateManyBuyerInputObjectSchema } from '../internals';

export const TransactionCreateManyBuyerInputEnvelopeObjectSchema = Yup.object({
    data: Yup.mixed().oneOfSchemas([TransactionCreateManyBuyerInputObjectSchema,
Yup.array().of(TransactionCreateManyBuyerInputObjectSchema)]),  skipDuplicates: Yup.boolean()
});
