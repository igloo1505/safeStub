import * as Yup from 'yup';
import { TeamWhereInputObjectSchema, TeamOrderByWithAggregationInputObjectSchema, TeamScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { TeamScalarFieldEnumSchema } from './internals'

export const TeamGroupBySchema = Yup.object({ where: TeamWhereInputObjectSchema, orderBy: TeamOrderByWithAggregationInputObjectSchema, having: TeamScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(TeamScalarFieldEnumSchema).required()  }).required()