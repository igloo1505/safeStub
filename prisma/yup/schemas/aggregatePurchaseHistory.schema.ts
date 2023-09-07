import * as Yup from 'yup';
import { PurchaseHistoryWhereInputObjectSchema, PurchaseHistoryOrderByWithRelationInputObjectSchema, PurchaseHistoryWhereUniqueInputObjectSchema } from './internals'

export const PurchaseHistoryAggregateSchema = Yup.object({ where: PurchaseHistoryWhereInputObjectSchema, orderBy: PurchaseHistoryOrderByWithRelationInputObjectSchema, cursor: PurchaseHistoryWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()