import * as Yup from 'yup';
import { ImageWhereInputObjectSchema, ImageOrderByWithRelationInputObjectSchema, ImageWhereUniqueInputObjectSchema } from './internals'

export const ImageAggregateSchema = Yup.object({ where: ImageWhereInputObjectSchema, orderBy: ImageOrderByWithRelationInputObjectSchema, cursor: ImageWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()