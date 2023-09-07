import * as Yup from 'yup';
import { ImageWhereInputObjectSchema, ImageOrderByWithRelationInputObjectSchema, ImageWhereUniqueInputObjectSchema } from './internals';
import { ImageScalarFieldEnumSchema } from './internals'

export const ImageFindManySchema = Yup.object({ where: ImageWhereInputObjectSchema, orderBy: ImageOrderByWithRelationInputObjectSchema, cursor: ImageWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(ImageScalarFieldEnumSchema)  }).required()