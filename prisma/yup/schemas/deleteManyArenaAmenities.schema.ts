import * as Yup from 'yup';
import { ArenaAmenitiesWhereInputObjectSchema } from './internals'

export const ArenaAmenitiesDeleteManySchema = Yup.object({ ArenaAmenitiesWhereInputObjectSchema  }).required()