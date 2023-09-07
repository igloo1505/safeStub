import * as Yup from 'yup';
import { LegalNameUpdateManyMutationInputObjectSchema, LegalNameWhereInputObjectSchema } from './internals'

export const LegalNameUpdateManySchema = Yup.object({ data: LegalNameUpdateManyMutationInputObjectSchema, where: LegalNameWhereInputObjectSchema  }).required()