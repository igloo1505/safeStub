import * as Yup from 'yup';
import { TransactionWhereUniqueInputObjectSchema, TransactionCreateInputObjectSchema, TransactionUpdateInputObjectSchema } from './internals'

export const TransactionUpsertSchema = Yup.object({ where: TransactionWhereUniqueInputObjectSchema, data: TransactionCreateInputObjectSchema, update: TransactionUpdateInputObjectSchema  }).required()