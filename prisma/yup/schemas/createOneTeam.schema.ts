import * as Yup from 'yup';
import { TeamCreateInputObjectSchema } from './internals'

export const TeamCreateSchema = Yup.object({ data: TeamCreateInputObjectSchema  }).required()