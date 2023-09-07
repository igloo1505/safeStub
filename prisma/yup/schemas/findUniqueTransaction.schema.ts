import * as Yup from 'yup';
import { TransactionWhereUniqueInputObjectSchema } from './internals'

export const TransactionFindUniqueSchema = Yup.object({ where: TransactionWhereUniqueInputObjectSchema }).required()