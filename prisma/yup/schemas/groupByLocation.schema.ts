import * as Yup from 'yup';
import { LocationWhereInputObjectSchema, LocationOrderByWithAggregationInputObjectSchema, LocationScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { LocationScalarFieldEnumSchema } from './internals'

export const LocationGroupBySchema = Yup.object({ where: LocationWhereInputObjectSchema, orderBy: LocationOrderByWithAggregationInputObjectSchema, having: LocationScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(LocationScalarFieldEnumSchema).required()  }).required()