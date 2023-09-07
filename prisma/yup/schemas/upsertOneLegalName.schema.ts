import * as Yup from 'yup';
import { LegalNameWhereUniqueInputObjectSchema, LegalNameCreateInputObjectSchema, LegalNameUpdateInputObjectSchema } from './internals'

export const LegalNameUpsertSchema = Yup.object({ where: LegalNameWhereUniqueInputObjectSchema, data: LegalNameCreateInputObjectSchema, update: LegalNameUpdateInputObjectSchema  }).required()