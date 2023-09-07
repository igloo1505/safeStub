import * as Yup from 'yup';
import { ColorsCreateInputObjectSchema } from './internals'

export const ColorsCreateSchema = Yup.object({ data: ColorsCreateInputObjectSchema  }).required()