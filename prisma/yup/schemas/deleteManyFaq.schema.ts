import * as Yup from 'yup';
import { FaqWhereInputObjectSchema } from './internals'

export const FaqDeleteManySchema = Yup.object({ FaqWhereInputObjectSchema  }).required()