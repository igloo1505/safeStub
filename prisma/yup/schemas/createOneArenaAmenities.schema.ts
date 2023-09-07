import * as Yup from 'yup';
import { ArenaAmenitiesCreateInputObjectSchema } from './internals'

export const ArenaAmenitiesCreateSchema = Yup.object({ data: ArenaAmenitiesCreateInputObjectSchema  }).required()