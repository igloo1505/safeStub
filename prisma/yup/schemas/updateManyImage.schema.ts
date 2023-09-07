import * as Yup from 'yup';
import { ImageUpdateManyMutationInputObjectSchema, ImageWhereInputObjectSchema } from './internals'

export const ImageUpdateManySchema = Yup.object({ data: ImageUpdateManyMutationInputObjectSchema, where: ImageWhereInputObjectSchema  }).required()