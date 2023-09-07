import * as Yup from 'yup';
import { PurchaseHistoryWhereInputObjectSchema, PurchaseHistoryOrderByWithAggregationInputObjectSchema, PurchaseHistoryScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { PurchaseHistoryScalarFieldEnumSchema } from './internals'

export const PurchaseHistoryGroupBySchema = Yup.object({ where: PurchaseHistoryWhereInputObjectSchema, orderBy: PurchaseHistoryOrderByWithAggregationInputObjectSchema, having: PurchaseHistoryScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(PurchaseHistoryScalarFieldEnumSchema).required()  }).required()