import * as Yup from 'yup';
import { PurchaseHistoryWhereUniqueInputObjectSchema, PurchaseHistoryCreateInputObjectSchema, PurchaseHistoryUpdateInputObjectSchema } from './internals'

export const PurchaseHistoryUpsertSchema = Yup.object({ where: PurchaseHistoryWhereUniqueInputObjectSchema, data: PurchaseHistoryCreateInputObjectSchema, update: PurchaseHistoryUpdateInputObjectSchema  }).required()