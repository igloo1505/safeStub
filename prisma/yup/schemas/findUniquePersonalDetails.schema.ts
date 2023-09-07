import * as Yup from 'yup';
import { PersonalDetailsWhereUniqueInputObjectSchema } from './internals'

export const PersonalDetailsFindUniqueSchema = Yup.object({ where: PersonalDetailsWhereUniqueInputObjectSchema }).required()