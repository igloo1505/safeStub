import * as Yup from 'yup';
import { ArenaWhereInputObjectSchema, ArenaOrderByWithRelationInputObjectSchema, ArenaWhereUniqueInputObjectSchema } from './internals';
import { ArenaScalarFieldEnumSchema } from './internals'

export const ArenaFindFirstSchema = Yup.object({ where: ArenaWhereInputObjectSchema, orderBy: ArenaOrderByWithRelationInputObjectSchema, cursor: ArenaWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(ArenaScalarFieldEnumSchema) }).required()