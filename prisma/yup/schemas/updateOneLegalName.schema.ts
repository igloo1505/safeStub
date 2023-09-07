import * as Yup from 'yup';
import { LegalNameUpdateInputObjectSchema, LegalNameWhereUniqueInputObjectSchema } from './internals'

export const LegalNameUpdateOneSchema = Yup.object({ data: LegalNameUpdateInputObjectSchema, where: LegalNameWhereUniqueInputObjectSchema  }).required()