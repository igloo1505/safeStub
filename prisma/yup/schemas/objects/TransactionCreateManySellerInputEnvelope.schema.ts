// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TransactionCreateManySellerInputObjectSchema } from '../internals';

export const TransactionCreateManySellerInputEnvelopeObjectSchema = Yup.object({
    data: Yup.mixed().oneOfSchemas([TransactionCreateManySellerInputObjectSchema,
Yup.array().of(TransactionCreateManySellerInputObjectSchema)]),  skipDuplicates: Yup.boolean()
});
