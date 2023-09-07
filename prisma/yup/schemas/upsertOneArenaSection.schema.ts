import * as Yup from 'yup';
import { ArenaSectionWhereUniqueInputObjectSchema, ArenaSectionCreateInputObjectSchema, ArenaSectionUpdateInputObjectSchema } from './internals'

export const ArenaSectionUpsertSchema = Yup.object({ where: ArenaSectionWhereUniqueInputObjectSchema, data: ArenaSectionCreateInputObjectSchema, update: ArenaSectionUpdateInputObjectSchema  }).required()