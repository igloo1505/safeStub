import * as Yup from 'yup';
import { ArenaCreateInputObjectSchema } from './internals'

export const ArenaCreateSchema = Yup.object({ data: ArenaCreateInputObjectSchema  }).required()