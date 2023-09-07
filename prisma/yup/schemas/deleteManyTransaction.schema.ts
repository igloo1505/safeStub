import * as Yup from 'yup';
import { TransactionWhereInputObjectSchema } from './internals'

export const TransactionDeleteManySchema = Yup.object({ TransactionWhereInputObjectSchema  }).required()