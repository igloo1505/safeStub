import * as Yup from 'yup';
import { ColorsUpdateInputObjectSchema, ColorsWhereUniqueInputObjectSchema } from './internals'

export const ColorsUpdateOneSchema = Yup.object({ data: ColorsUpdateInputObjectSchema, where: ColorsWhereUniqueInputObjectSchema  }).required()