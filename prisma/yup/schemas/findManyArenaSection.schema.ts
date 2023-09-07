import * as Yup from 'yup';
import { ArenaSectionWhereInputObjectSchema, ArenaSectionOrderByWithRelationInputObjectSchema, ArenaSectionWhereUniqueInputObjectSchema } from './internals';
import { ArenaSectionScalarFieldEnumSchema } from './internals'

export const ArenaSectionFindManySchema = Yup.object({ where: ArenaSectionWhereInputObjectSchema, orderBy: ArenaSectionOrderByWithRelationInputObjectSchema, cursor: ArenaSectionWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(ArenaSectionScalarFieldEnumSchema)  }).required()