import * as Yup from 'yup';
import { LocationWhereInputObjectSchema, LocationOrderByWithRelationInputObjectSchema, LocationWhereUniqueInputObjectSchema } from './internals';
import { LocationScalarFieldEnumSchema } from './internals'

export const LocationFindFirstSchema = Yup.object({ where: LocationWhereInputObjectSchema, orderBy: LocationOrderByWithRelationInputObjectSchema, cursor: LocationWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(LocationScalarFieldEnumSchema) }).required()