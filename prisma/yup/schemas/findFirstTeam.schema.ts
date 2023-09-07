import * as Yup from 'yup';
import { TeamWhereInputObjectSchema, TeamOrderByWithRelationInputObjectSchema, TeamWhereUniqueInputObjectSchema } from './internals';
import { TeamScalarFieldEnumSchema } from './internals'

export const TeamFindFirstSchema = Yup.object({ where: TeamWhereInputObjectSchema, orderBy: TeamOrderByWithRelationInputObjectSchema, cursor: TeamWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(TeamScalarFieldEnumSchema) }).required()