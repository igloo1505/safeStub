import * as Yup from 'yup';
import { PurchaseHistoryWhereInputObjectSchema, PurchaseHistoryOrderByWithRelationInputObjectSchema, PurchaseHistoryWhereUniqueInputObjectSchema } from './internals';
import { PurchaseHistoryScalarFieldEnumSchema } from './internals'

export const PurchaseHistoryFindFirstSchema = Yup.object({ where: PurchaseHistoryWhereInputObjectSchema, orderBy: PurchaseHistoryOrderByWithRelationInputObjectSchema, cursor: PurchaseHistoryWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(PurchaseHistoryScalarFieldEnumSchema) }).required()