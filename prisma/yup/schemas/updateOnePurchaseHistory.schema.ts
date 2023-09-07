import * as Yup from 'yup';
import { PurchaseHistoryUpdateInputObjectSchema, PurchaseHistoryWhereUniqueInputObjectSchema } from './internals'

export const PurchaseHistoryUpdateOneSchema = Yup.object({ data: PurchaseHistoryUpdateInputObjectSchema, where: PurchaseHistoryWhereUniqueInputObjectSchema  }).required()