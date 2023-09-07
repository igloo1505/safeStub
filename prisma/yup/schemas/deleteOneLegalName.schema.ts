import * as Yup from 'yup';
import { LegalNameWhereUniqueInputObjectSchema } from './internals'

export const LegalNameDeleteOneSchema = Yup.object({ where: LegalNameWhereUniqueInputObjectSchema  }).required()