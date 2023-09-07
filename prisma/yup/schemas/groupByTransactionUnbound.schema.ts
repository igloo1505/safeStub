import * as Yup from 'yup';
import { TransactionUnboundWhereInputObjectSchema, TransactionUnboundOrderByWithAggregationInputObjectSchema, TransactionUnboundScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { TransactionUnboundScalarFieldEnumSchema } from './internals'

export const TransactionUnboundGroupBySchema = Yup.object({ where: TransactionUnboundWhereInputObjectSchema, orderBy: TransactionUnboundOrderByWithAggregationInputObjectSchema, having: TransactionUnboundScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(TransactionUnboundScalarFieldEnumSchema).required()  }).required()