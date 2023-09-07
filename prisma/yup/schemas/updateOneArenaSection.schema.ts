import * as Yup from 'yup';
import { ArenaSectionUpdateInputObjectSchema, ArenaSectionWhereUniqueInputObjectSchema } from './internals'

export const ArenaSectionUpdateOneSchema = Yup.object({ data: ArenaSectionUpdateInputObjectSchema, where: ArenaSectionWhereUniqueInputObjectSchema  }).required()