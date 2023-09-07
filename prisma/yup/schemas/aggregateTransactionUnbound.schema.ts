import * as Yup from 'yup';
import { TransactionUnboundWhereInputObjectSchema, TransactionUnboundOrderByWithRelationInputObjectSchema, TransactionUnboundWhereUniqueInputObjectSchema } from './internals'

export const TransactionUnboundAggregateSchema = Yup.object({ where: TransactionUnboundWhereInputObjectSchema, orderBy: TransactionUnboundOrderByWithRelationInputObjectSchema, cursor: TransactionUnboundWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()