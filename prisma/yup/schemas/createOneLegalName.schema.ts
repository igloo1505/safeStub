import * as Yup from 'yup';
import { LegalNameCreateInputObjectSchema } from './internals'

export const LegalNameCreateSchema = Yup.object({ data: LegalNameCreateInputObjectSchema  }).required()