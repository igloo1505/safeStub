import * as Yup from 'yup';
import { TransactionWhereUniqueInputObjectSchema } from './internals'

export const TransactionDeleteOneSchema = Yup.object({ where: TransactionWhereUniqueInputObjectSchema  }).required()