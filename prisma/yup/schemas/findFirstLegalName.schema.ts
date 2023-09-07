import * as Yup from 'yup';
import { LegalNameWhereInputObjectSchema, LegalNameOrderByWithRelationInputObjectSchema, LegalNameWhereUniqueInputObjectSchema } from './internals';
import { LegalNameScalarFieldEnumSchema } from './internals'

export const LegalNameFindFirstSchema = Yup.object({ where: LegalNameWhereInputObjectSchema, orderBy: LegalNameOrderByWithRelationInputObjectSchema, cursor: LegalNameWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(LegalNameScalarFieldEnumSchema) }).required()