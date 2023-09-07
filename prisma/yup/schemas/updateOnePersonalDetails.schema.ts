import * as Yup from 'yup';
import { PersonalDetailsUpdateInputObjectSchema, PersonalDetailsWhereUniqueInputObjectSchema } from './internals'

export const PersonalDetailsUpdateOneSchema = Yup.object({ data: PersonalDetailsUpdateInputObjectSchema, where: PersonalDetailsWhereUniqueInputObjectSchema  }).required()