import * as Yup from 'yup';
import { ArenaAmenitiesWhereInputObjectSchema, ArenaAmenitiesOrderByWithAggregationInputObjectSchema, ArenaAmenitiesScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { ArenaAmenitiesScalarFieldEnumSchema } from './internals'

export const ArenaAmenitiesGroupBySchema = Yup.object({ where: ArenaAmenitiesWhereInputObjectSchema, orderBy: ArenaAmenitiesOrderByWithAggregationInputObjectSchema, having: ArenaAmenitiesScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(ArenaAmenitiesScalarFieldEnumSchema).required()  }).required()