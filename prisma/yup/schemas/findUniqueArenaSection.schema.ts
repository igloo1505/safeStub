import * as Yup from 'yup';
import { ArenaSectionWhereUniqueInputObjectSchema } from './internals'

export const ArenaSectionFindUniqueSchema = Yup.object({ where: ArenaSectionWhereUniqueInputObjectSchema }).required()