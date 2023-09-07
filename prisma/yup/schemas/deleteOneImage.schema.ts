import * as Yup from 'yup';
import { ImageWhereUniqueInputObjectSchema } from './internals'

export const ImageDeleteOneSchema = Yup.object({ where: ImageWhereUniqueInputObjectSchema  }).required()