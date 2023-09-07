import * as Yup from 'yup';
import { FaqWhereUniqueInputObjectSchema, FaqCreateInputObjectSchema, FaqUpdateInputObjectSchema } from './internals'

export const FaqUpsertSchema = Yup.object({ where: FaqWhereUniqueInputObjectSchema, data: FaqCreateInputObjectSchema, update: FaqUpdateInputObjectSchema  }).required()