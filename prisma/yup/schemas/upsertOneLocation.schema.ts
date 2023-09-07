import * as Yup from 'yup';
import { LocationWhereUniqueInputObjectSchema, LocationCreateInputObjectSchema, LocationUpdateInputObjectSchema } from './internals'

export const LocationUpsertSchema = Yup.object({ where: LocationWhereUniqueInputObjectSchema, data: LocationCreateInputObjectSchema, update: LocationUpdateInputObjectSchema  }).required()