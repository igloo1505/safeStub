import * as Yup from 'yup';
import { PersonalDetailsWhereInputObjectSchema } from './internals'

export const PersonalDetailsDeleteManySchema = Yup.object({ PersonalDetailsWhereInputObjectSchema  }).required()