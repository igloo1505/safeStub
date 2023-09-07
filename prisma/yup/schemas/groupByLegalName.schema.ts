import * as Yup from 'yup';
import { LegalNameWhereInputObjectSchema, LegalNameOrderByWithAggregationInputObjectSchema, LegalNameScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { LegalNameScalarFieldEnumSchema } from './internals'

export const LegalNameGroupBySchema = Yup.object({ where: LegalNameWhereInputObjectSchema, orderBy: LegalNameOrderByWithAggregationInputObjectSchema, having: LegalNameScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(LegalNameScalarFieldEnumSchema).required()  }).required()