import * as Yup from 'yup';
import { TransactionWhereInputObjectSchema, TransactionOrderByWithRelationInputObjectSchema, TransactionWhereUniqueInputObjectSchema } from './internals';
import { TransactionScalarFieldEnumSchema } from './internals'

export const TransactionFindManySchema = Yup.object({ where: TransactionWhereInputObjectSchema, orderBy: TransactionOrderByWithRelationInputObjectSchema, cursor: TransactionWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(TransactionScalarFieldEnumSchema)  }).required()