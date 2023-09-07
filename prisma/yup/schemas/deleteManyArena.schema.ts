import * as Yup from 'yup';
import { ArenaWhereInputObjectSchema } from './internals'

export const ArenaDeleteManySchema = Yup.object({ ArenaWhereInputObjectSchema  }).required()