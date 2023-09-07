import * as Yup from 'yup';
import { PersonalDetailsCreateInputObjectSchema } from './internals'

export const PersonalDetailsCreateSchema = Yup.object({ data: PersonalDetailsCreateInputObjectSchema  }).required()