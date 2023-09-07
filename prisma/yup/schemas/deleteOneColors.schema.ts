import * as Yup from 'yup';
import { ColorsWhereUniqueInputObjectSchema } from './internals'

export const ColorsDeleteOneSchema = Yup.object({ where: ColorsWhereUniqueInputObjectSchema  }).required()