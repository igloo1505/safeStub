import * as Yup from 'yup';
import { LegalNameWhereUniqueInputObjectSchema } from './internals'

export const LegalNameFindUniqueSchema = Yup.object({ where: LegalNameWhereUniqueInputObjectSchema }).required()