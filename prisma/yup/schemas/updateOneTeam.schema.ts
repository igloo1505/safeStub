import * as Yup from 'yup';
import { TeamUpdateInputObjectSchema, TeamWhereUniqueInputObjectSchema } from './internals'

export const TeamUpdateOneSchema = Yup.object({ data: TeamUpdateInputObjectSchema, where: TeamWhereUniqueInputObjectSchema  }).required()