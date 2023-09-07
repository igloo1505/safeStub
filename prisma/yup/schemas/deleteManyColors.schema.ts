import * as Yup from 'yup';
import { ColorsWhereInputObjectSchema } from './internals'

export const ColorsDeleteManySchema = Yup.object({ ColorsWhereInputObjectSchema  }).required()