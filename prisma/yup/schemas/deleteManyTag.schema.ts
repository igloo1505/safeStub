import * as Yup from 'yup';
import { TagWhereInputObjectSchema } from './internals'

export const TagDeleteManySchema = Yup.object({ TagWhereInputObjectSchema  }).required()