import * as Yup from 'yup';
import { TeamWhereUniqueInputObjectSchema } from './internals'

export const TeamDeleteOneSchema = Yup.object({ where: TeamWhereUniqueInputObjectSchema  }).required()