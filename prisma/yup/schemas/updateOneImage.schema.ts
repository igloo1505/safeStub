import * as Yup from 'yup';
import { ImageUpdateInputObjectSchema, ImageWhereUniqueInputObjectSchema } from './internals'

export const ImageUpdateOneSchema = Yup.object({ data: ImageUpdateInputObjectSchema, where: ImageWhereUniqueInputObjectSchema  }).required()