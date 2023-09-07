import * as Yup from 'yup';
import { LocationUpdateInputObjectSchema, LocationWhereUniqueInputObjectSchema } from './internals'

export const LocationUpdateOneSchema = Yup.object({ data: LocationUpdateInputObjectSchema, where: LocationWhereUniqueInputObjectSchema  }).required()