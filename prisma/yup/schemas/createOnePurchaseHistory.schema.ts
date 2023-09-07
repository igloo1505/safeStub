import * as Yup from 'yup';
import { PurchaseHistoryCreateInputObjectSchema } from './internals'

export const PurchaseHistoryCreateSchema = Yup.object({ data: PurchaseHistoryCreateInputObjectSchema  }).required()