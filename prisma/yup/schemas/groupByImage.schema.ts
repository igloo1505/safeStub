import * as Yup from 'yup';
import { ImageWhereInputObjectSchema, ImageOrderByWithAggregationInputObjectSchema, ImageScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { ImageScalarFieldEnumSchema } from './internals'

export const ImageGroupBySchema = Yup.object({ where: ImageWhereInputObjectSchema, orderBy: ImageOrderByWithAggregationInputObjectSchema, having: ImageScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(ImageScalarFieldEnumSchema).required()  }).required()