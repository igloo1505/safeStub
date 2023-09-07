import * as Yup from 'yup';
import { ArenaSectionUpdateManyMutationInputObjectSchema, ArenaSectionWhereInputObjectSchema } from './internals'

export const ArenaSectionUpdateManySchema = Yup.object({ data: ArenaSectionUpdateManyMutationInputObjectSchema, where: ArenaSectionWhereInputObjectSchema  }).required()