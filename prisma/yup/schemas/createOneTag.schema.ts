import * as Yup from 'yup';
import { TagCreateInputObjectSchema } from './internals'

export const TagCreateSchema = Yup.object({ data: TagCreateInputObjectSchema  }).required()