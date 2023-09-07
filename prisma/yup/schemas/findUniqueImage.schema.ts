import * as Yup from 'yup';
import { ImageWhereUniqueInputObjectSchema } from './internals'

export const ImageFindUniqueSchema = Yup.object({ where: ImageWhereUniqueInputObjectSchema }).required()