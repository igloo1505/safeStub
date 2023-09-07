import * as Yup from 'yup';
import { TransactionWhereInputObjectSchema, TransactionOrderByWithRelationInputObjectSchema, TransactionWhereUniqueInputObjectSchema } from './internals'

export const TransactionAggregateSchema = Yup.object({ where: TransactionWhereInputObjectSchema, orderBy: TransactionOrderByWithRelationInputObjectSchema, cursor: TransactionWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()