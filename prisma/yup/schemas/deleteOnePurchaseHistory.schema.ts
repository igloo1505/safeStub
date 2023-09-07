import * as Yup from 'yup';
import { PurchaseHistoryWhereUniqueInputObjectSchema } from './internals'

export const PurchaseHistoryDeleteOneSchema = Yup.object({ where: PurchaseHistoryWhereUniqueInputObjectSchema  }).required()