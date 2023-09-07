import * as Yup from 'yup';
import { LegalNameWhereInputObjectSchema, LegalNameOrderByWithRelationInputObjectSchema, LegalNameWhereUniqueInputObjectSchema } from './internals'

export const LegalNameAggregateSchema = Yup.object({ where: LegalNameWhereInputObjectSchema, orderBy: LegalNameOrderByWithRelationInputObjectSchema, cursor: LegalNameWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()