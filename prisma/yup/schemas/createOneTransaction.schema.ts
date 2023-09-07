import * as Yup from 'yup';
import { TransactionCreateInputObjectSchema } from './internals'

export const TransactionCreateSchema = Yup.object({ data: TransactionCreateInputObjectSchema  }).required()