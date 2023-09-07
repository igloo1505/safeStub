import * as Yup from 'yup';
import { PurchaseHistoryUpdateManyMutationInputObjectSchema, PurchaseHistoryWhereInputObjectSchema } from './internals'

export const PurchaseHistoryUpdateManySchema = Yup.object({ data: PurchaseHistoryUpdateManyMutationInputObjectSchema, where: PurchaseHistoryWhereInputObjectSchema  }).required()