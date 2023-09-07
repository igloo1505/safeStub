import * as Yup from 'yup';
import { TransactionUnboundWhereUniqueInputObjectSchema, TransactionUnboundCreateInputObjectSchema, TransactionUnboundUpdateInputObjectSchema } from './internals'

export const TransactionUnboundUpsertSchema = Yup.object({ where: TransactionUnboundWhereUniqueInputObjectSchema, data: TransactionUnboundCreateInputObjectSchema, update: TransactionUnboundUpdateInputObjectSchema  }).required()