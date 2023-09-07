import * as Yup from 'yup';
import { ImageWhereUniqueInputObjectSchema, ImageCreateInputObjectSchema, ImageUpdateInputObjectSchema } from './internals'

export const ImageUpsertSchema = Yup.object({ where: ImageWhereUniqueInputObjectSchema, data: ImageCreateInputObjectSchema, update: ImageUpdateInputObjectSchema  }).required()