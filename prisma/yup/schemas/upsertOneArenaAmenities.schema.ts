import * as Yup from 'yup';
import { ArenaAmenitiesWhereUniqueInputObjectSchema, ArenaAmenitiesCreateInputObjectSchema, ArenaAmenitiesUpdateInputObjectSchema } from './internals'

export const ArenaAmenitiesUpsertSchema = Yup.object({ where: ArenaAmenitiesWhereUniqueInputObjectSchema, data: ArenaAmenitiesCreateInputObjectSchema, update: ArenaAmenitiesUpdateInputObjectSchema  }).required()