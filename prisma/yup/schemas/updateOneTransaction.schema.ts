import * as Yup from 'yup';
import { TransactionUpdateInputObjectSchema, TransactionWhereUniqueInputObjectSchema } from './internals'

export const TransactionUpdateOneSchema = Yup.object({ data: TransactionUpdateInputObjectSchema, where: TransactionWhereUniqueInputObjectSchema  }).required()