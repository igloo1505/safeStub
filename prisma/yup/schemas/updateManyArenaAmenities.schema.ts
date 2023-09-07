import * as Yup from 'yup';
import { ArenaAmenitiesUpdateManyMutationInputObjectSchema, ArenaAmenitiesWhereInputObjectSchema } from './internals'

export const ArenaAmenitiesUpdateManySchema = Yup.object({ data: ArenaAmenitiesUpdateManyMutationInputObjectSchema, where: ArenaAmenitiesWhereInputObjectSchema  }).required()