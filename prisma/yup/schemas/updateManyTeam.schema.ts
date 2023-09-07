import * as Yup from 'yup';
import { TeamUpdateManyMutationInputObjectSchema, TeamWhereInputObjectSchema } from './internals'

export const TeamUpdateManySchema = Yup.object({ data: TeamUpdateManyMutationInputObjectSchema, where: TeamWhereInputObjectSchema  }).required()