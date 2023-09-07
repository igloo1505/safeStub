import * as Yup from 'yup';
import { ArenaAmenitiesWhereUniqueInputObjectSchema } from './internals'

export const ArenaAmenitiesDeleteOneSchema = Yup.object({ where: ArenaAmenitiesWhereUniqueInputObjectSchema  }).required()