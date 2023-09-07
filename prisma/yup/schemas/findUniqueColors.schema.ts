import * as Yup from 'yup';
import { ColorsWhereUniqueInputObjectSchema } from './internals'

export const ColorsFindUniqueSchema = Yup.object({ where: ColorsWhereUniqueInputObjectSchema }).required()