import * as Yup from 'yup';
import { TransactionUpdateManyMutationInputObjectSchema, TransactionWhereInputObjectSchema } from './internals'

export const TransactionUpdateManySchema = Yup.object({ data: TransactionUpdateManyMutationInputObjectSchema, where: TransactionWhereInputObjectSchema  }).required()