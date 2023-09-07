import * as Yup from 'yup';
import { TeamWhereInputObjectSchema } from './internals'

export const TeamDeleteManySchema = Yup.object({ TeamWhereInputObjectSchema  }).required()