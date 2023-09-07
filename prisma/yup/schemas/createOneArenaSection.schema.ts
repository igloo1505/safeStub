import * as Yup from 'yup';
import { ArenaSectionCreateInputObjectSchema } from './internals'

export const ArenaSectionCreateSchema = Yup.object({ data: ArenaSectionCreateInputObjectSchema  }).required()