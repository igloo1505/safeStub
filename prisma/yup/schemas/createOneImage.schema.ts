import * as Yup from 'yup';
import { ImageCreateInputObjectSchema } from './internals'

export const ImageCreateSchema = Yup.object({ data: ImageCreateInputObjectSchema  }).required()