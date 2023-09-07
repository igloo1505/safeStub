import * as Yup from 'yup';
import { LegalNameWhereInputObjectSchema } from './internals'

export const LegalNameDeleteManySchema = Yup.object({ LegalNameWhereInputObjectSchema  }).required()