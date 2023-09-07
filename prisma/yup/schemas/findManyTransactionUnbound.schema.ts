import * as Yup from 'yup';
import { TransactionUnboundWhereInputObjectSchema, TransactionUnboundOrderByWithRelationInputObjectSchema, TransactionUnboundWhereUniqueInputObjectSchema } from './internals';
import { TransactionUnboundScalarFieldEnumSchema } from './internals'

export const TransactionUnboundFindManySchema = Yup.object({ where: TransactionUnboundWhereInputObjectSchema, orderBy: TransactionUnboundOrderByWithRelationInputObjectSchema, cursor: TransactionUnboundWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(TransactionUnboundScalarFieldEnumSchema)  }).required()