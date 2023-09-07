import * as Yup from 'yup';
import { TeamWhereInputObjectSchema, TeamOrderByWithRelationInputObjectSchema, TeamWhereUniqueInputObjectSchema } from './internals'

export const TeamAggregateSchema = Yup.object({ where: TeamWhereInputObjectSchema, orderBy: TeamOrderByWithRelationInputObjectSchema, cursor: TeamWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()