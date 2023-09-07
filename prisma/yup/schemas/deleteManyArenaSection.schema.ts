import * as Yup from 'yup';
import { ArenaSectionWhereInputObjectSchema } from './internals'

export const ArenaSectionDeleteManySchema = Yup.object({ ArenaSectionWhereInputObjectSchema  }).required()