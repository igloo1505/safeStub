import * as Yup from 'yup';
import { FaqUpdateInputObjectSchema, FaqWhereUniqueInputObjectSchema } from './internals'

export const FaqUpdateOneSchema = Yup.object({ data: FaqUpdateInputObjectSchema, where: FaqWhereUniqueInputObjectSchema  }).required()