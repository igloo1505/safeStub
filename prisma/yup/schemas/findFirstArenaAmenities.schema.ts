import * as Yup from 'yup';
import { ArenaAmenitiesWhereInputObjectSchema, ArenaAmenitiesOrderByWithRelationInputObjectSchema, ArenaAmenitiesWhereUniqueInputObjectSchema } from './internals';
import { ArenaAmenitiesScalarFieldEnumSchema } from './internals'

export const ArenaAmenitiesFindFirstSchema = Yup.object({ where: ArenaAmenitiesWhereInputObjectSchema, orderBy: ArenaAmenitiesOrderByWithRelationInputObjectSchema, cursor: ArenaAmenitiesWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(ArenaAmenitiesScalarFieldEnumSchema) }).required()