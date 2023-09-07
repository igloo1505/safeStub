import * as Yup from 'yup';
import { TransactionWhereInputObjectSchema, TransactionOrderByWithAggregationInputObjectSchema, TransactionScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { TransactionScalarFieldEnumSchema } from './internals'

export const TransactionGroupBySchema = Yup.object({ where: TransactionWhereInputObjectSchema, orderBy: TransactionOrderByWithAggregationInputObjectSchema, having: TransactionScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(TransactionScalarFieldEnumSchema).required()  }).required()