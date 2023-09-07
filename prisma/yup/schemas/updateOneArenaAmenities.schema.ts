import * as Yup from 'yup';
import { ArenaAmenitiesUpdateInputObjectSchema, ArenaAmenitiesWhereUniqueInputObjectSchema } from './internals'

export const ArenaAmenitiesUpdateOneSchema = Yup.object({ data: ArenaAmenitiesUpdateInputObjectSchema, where: ArenaAmenitiesWhereUniqueInputObjectSchema  }).required()