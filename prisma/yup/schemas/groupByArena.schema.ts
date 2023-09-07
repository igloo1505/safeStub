import * as Yup from 'yup';
import { ArenaWhereInputObjectSchema, ArenaOrderByWithAggregationInputObjectSchema, ArenaScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { ArenaScalarFieldEnumSchema } from './internals'

export const ArenaGroupBySchema = Yup.object({ where: ArenaWhereInputObjectSchema, orderBy: ArenaOrderByWithAggregationInputObjectSchema, having: ArenaScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(ArenaScalarFieldEnumSchema).required()  }).required()