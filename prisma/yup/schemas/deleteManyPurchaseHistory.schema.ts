import * as Yup from 'yup';
import { PurchaseHistoryWhereInputObjectSchema } from './internals'

export const PurchaseHistoryDeleteManySchema = Yup.object({ PurchaseHistoryWhereInputObjectSchema  }).required()