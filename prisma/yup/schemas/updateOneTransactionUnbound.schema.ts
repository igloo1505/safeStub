import * as Yup from 'yup';
import { TransactionUnboundUpdateInputObjectSchema, TransactionUnboundWhereUniqueInputObjectSchema } from './internals'

export const TransactionUnboundUpdateOneSchema = Yup.object({ data: TransactionUnboundUpdateInputObjectSchema, where: TransactionUnboundWhereUniqueInputObjectSchema  }).required()