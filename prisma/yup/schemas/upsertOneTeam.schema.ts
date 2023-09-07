import * as Yup from 'yup';
import { TeamWhereUniqueInputObjectSchema, TeamCreateInputObjectSchema, TeamUpdateInputObjectSchema } from './internals'

export const TeamUpsertSchema = Yup.object({ where: TeamWhereUniqueInputObjectSchema, data: TeamCreateInputObjectSchema, update: TeamUpdateInputObjectSchema  }).required()