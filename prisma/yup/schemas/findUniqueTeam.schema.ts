import * as Yup from 'yup';
import { TeamWhereUniqueInputObjectSchema } from './internals'

export const TeamFindUniqueSchema = Yup.object({ where: TeamWhereUniqueInputObjectSchema }).required()