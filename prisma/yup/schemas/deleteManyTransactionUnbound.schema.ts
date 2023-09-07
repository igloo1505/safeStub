import * as Yup from 'yup';
import { TransactionUnboundWhereInputObjectSchema } from './internals'

export const TransactionUnboundDeleteManySchema = Yup.object({ TransactionUnboundWhereInputObjectSchema  }).required()