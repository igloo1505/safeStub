import * as Yup from 'yup';
import { TransactionUnboundCreateInputObjectSchema } from './internals'

export const TransactionUnboundCreateSchema = Yup.object({ data: TransactionUnboundCreateInputObjectSchema  }).required()