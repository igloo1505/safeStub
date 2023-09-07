import * as Yup from 'yup';
import { PersonalDetailsUpdateManyMutationInputObjectSchema, PersonalDetailsWhereInputObjectSchema } from './internals'

export const PersonalDetailsUpdateManySchema = Yup.object({ data: PersonalDetailsUpdateManyMutationInputObjectSchema, where: PersonalDetailsWhereInputObjectSchema  }).required()