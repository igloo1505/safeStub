import * as Yup from 'yup';
import { TransactionUnboundWhereUniqueInputObjectSchema } from './internals'

export const TransactionUnboundDeleteOneSchema = Yup.object({ where: TransactionUnboundWhereUniqueInputObjectSchema  }).required()