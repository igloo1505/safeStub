// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TransactionWhereInputObjectSchema } from '../internals';

export const TransactionListRelationFilterObjectSchema = Yup.object({
    every: TransactionWhereInputObjectSchema,  some: TransactionWhereInputObjectSchema,  none: TransactionWhereInputObjectSchema
});
