import * as Yup from 'yup';
import { TransactionUnboundWhereUniqueInputObjectSchema } from './internals'

export const TransactionUnboundFindUniqueSchema = Yup.object({ where: TransactionUnboundWhereUniqueInputObjectSchema }).required()