import * as Yup from 'yup';
import { ArenaSectionWhereUniqueInputObjectSchema } from './internals'

export const ArenaSectionDeleteOneSchema = Yup.object({ where: ArenaSectionWhereUniqueInputObjectSchema  }).required()