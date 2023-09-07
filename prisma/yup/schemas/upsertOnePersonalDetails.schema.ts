import * as Yup from 'yup';
import { PersonalDetailsWhereUniqueInputObjectSchema, PersonalDetailsCreateInputObjectSchema, PersonalDetailsUpdateInputObjectSchema } from './internals'

export const PersonalDetailsUpsertSchema = Yup.object({ where: PersonalDetailsWhereUniqueInputObjectSchema, data: PersonalDetailsCreateInputObjectSchema, update: PersonalDetailsUpdateInputObjectSchema  }).required()