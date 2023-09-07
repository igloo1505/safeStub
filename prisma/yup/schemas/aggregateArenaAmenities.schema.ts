import * as Yup from 'yup';
import { ArenaAmenitiesWhereInputObjectSchema, ArenaAmenitiesOrderByWithRelationInputObjectSchema, ArenaAmenitiesWhereUniqueInputObjectSchema } from './internals'

export const ArenaAmenitiesAggregateSchema = Yup.object({ where: ArenaAmenitiesWhereInputObjectSchema, orderBy: ArenaAmenitiesOrderByWithRelationInputObjectSchema, cursor: ArenaAmenitiesWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()