import * as Yup from 'yup';
import { TransactionUnboundUpdateManyMutationInputObjectSchema, TransactionUnboundWhereInputObjectSchema } from './internals'

export const TransactionUnboundUpdateManySchema = Yup.object({ data: TransactionUnboundUpdateManyMutationInputObjectSchema, where: TransactionUnboundWhereInputObjectSchema  }).required()