import * as Yup from 'yup';
import { PersonalDetailsWhereUniqueInputObjectSchema } from './internals'

export const PersonalDetailsDeleteOneSchema = Yup.object({ where: PersonalDetailsWhereUniqueInputObjectSchema  }).required()