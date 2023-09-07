import * as Yup from 'yup';
import { FaqCreateInputObjectSchema } from './internals'

export const FaqCreateSchema = Yup.object({ data: FaqCreateInputObjectSchema  }).required()