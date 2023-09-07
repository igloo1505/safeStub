import * as Yup from 'yup';
import { LocationWhereInputObjectSchema, LocationOrderByWithRelationInputObjectSchema, LocationWhereUniqueInputObjectSchema } from './internals'

export const LocationAggregateSchema = Yup.object({ where: LocationWhereInputObjectSchema, orderBy: LocationOrderByWithRelationInputObjectSchema, cursor: LocationWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()