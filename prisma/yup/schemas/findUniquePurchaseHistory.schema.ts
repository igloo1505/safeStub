import * as Yup from 'yup';
import { PurchaseHistoryWhereUniqueInputObjectSchema } from './internals'

export const PurchaseHistoryFindUniqueSchema = Yup.object({ where: PurchaseHistoryWhereUniqueInputObjectSchema }).required()